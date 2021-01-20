import {writable} from 'svelte/store';

export const queueLocalStorage = writable(localStorage.getItem('queue') || []);

queueLocalStorage.subscribe(value => localStorage.setItem('queue', value));