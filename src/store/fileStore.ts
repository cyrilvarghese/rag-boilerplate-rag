import { writable, type Writable } from 'svelte/store';
import type { SourceFile, FileListResponse } from '../types';

// const baseUrl = import.meta.env.BASE_URL;
const baseUrl = 'http://localhost:8000/api';
// Svelte Store for managing files
function createFileStore() {
    const { subscribe, set, update }: Writable<SourceFile[]> = writable([]);

    async function fetchFileList() {
        try {
            const response = await fetch(`${baseUrl}/files`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: any = await response.json();
            set(data.files);
        } catch (error) {
            console.error('Error fetching file list:', error);
            set([]);
            throw error;
        }
    }

    async function uploadFiles(selectedFiles: FileList | null) {
        if (selectedFiles && selectedFiles.length > 0) {
            const formData = new FormData();

            Array.from(selectedFiles).forEach(file => {
                formData.append('pdf_files', file);
            });

            // formData.append('files_data', JSON.stringify(filesInfo));

            try {
                const response = await fetch(`${baseUrl}/upload`, {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Success:', data);

                // Refresh the file list
                await fetchFileList();
            } catch (error) {
                console.error('Error uploading files:', error);
                throw error;
            }
        } else {
            alert("Please select a file to upload.");
        }
    }
    // Function to delete a file and update the store
    async function deleteFile(filename: string) {
        try {
            const response = await fetch(`${baseUrl}/files/delete?filename=${encodeURIComponent(filename)}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log(`File ${filename} deleted successfully.`);
                // Refresh the file list
                await fetchFileList();
            } else {
                console.error(`Failed to delete file ${filename}:`, response.statusText);
            }
        } catch (error: any) {
            console.error('Error deleting file:', error.message);
        }
    }


    return {
        subscribe,
        fetchFileList,
        uploadFiles,
        deleteFile,
    };
}

export const fileStore = createFileStore();

function extractFileInfo(fileItem: Element): any {
    throw new Error('Function not implemented.');
}
