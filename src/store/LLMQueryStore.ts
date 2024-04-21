import { writable, type Writable } from 'svelte/store';
// const baseUrl = import.meta.env.BASE_URL;
const baseUrl = 'http://localhost:8000/api';
function createQueryStore() {
    const { subscribe, set, update }: Writable<[]> = writable([]);
    async function queryLlmWithTemplate(snippets: string[], question: string, templateType: string, creativity: number) {
        const response = await fetch(`${baseUrl}/answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                texts: snippets,
                topic: question,
                type: templateType,
                creativity: creativity
            }),

        });

        if (response.ok) {
            const result = await response.json();
            console.log(JSON.parse(result))
            set(result)

        } else {
            console.error('Error:', response.statusText);
        }
    }
    return {
        subscribe,
        queryLlmWithTemplate
    };
}

export const llmQueryStore = createQueryStore();