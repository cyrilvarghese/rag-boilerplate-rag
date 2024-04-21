// src/stores/UrlProcessorStore.ts
import { writable } from 'svelte/store';

const baseUrl = 'http://localhost:8000';  // Adjust this as needed

export const urlProcessorStore = () => {
    const { subscribe, set } = writable<string[]>([]);

    async function AddFromURLs(urls: string[]): Promise<void> {
        const request: any = { urls };

        try {
            const response = await fetch(`${baseUrl}/load-urls`, { // Using baseUrl to construct the full URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: any = await response.json();
            set(data);
        } catch (error: any) {
            console.error("Failed to load URLs:", error);
            set([]);
        }
    }

    return {
        subscribe,
        AddFromURLs
    };
};

export const urlsStore = urlProcessorStore();