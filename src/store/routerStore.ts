
import { toast } from 'svelte-sonner';
import { writable, type Writable } from 'svelte/store';
const BASE_URL = "http://localhost:8000/api"


export const selectedFileNames = writable<string[]>([]);
export const activeRoute = writable("/");
