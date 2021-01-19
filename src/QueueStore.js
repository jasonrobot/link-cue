import { writable } from 'svelte/store';

export const queue = writable([]);

export function popFromQueue() {
	queue.update(queue => queue.slice(1))
}