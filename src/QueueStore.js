import { writable } from 'svelte/store';

export const queue = writable(JSON.parse(localStorage.getItem('queue')) || []);

queue.subscribe(value => localStorage.setItem('queue', JSON.stringify(value)));

export function popFromQueue() {
  queue.update(queue => queue.slice(1));
}
