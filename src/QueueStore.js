import { writable, derived, get } from 'svelte/store';

export const queue = writable(JSON.parse(localStorage.getItem('queue')) || []);

queue.subscribe(value => localStorage.setItem('queue', JSON.stringify(value)));

export function popFromQueue() {
  queue.update(queue => queue.slice(1));
}

export const undoQueue = writable([]);
export const redoQueue = writable([]);

queue.subscribe(queueValue => undoQueue.update(undoValue => [queueValue, ...undoValue]));


export function undo() {
  let undoHead;
  let currentState = get(queue);
  undoQueue.update(value => {
    undoHead = value[1] ?? [];
    console.log(`state wird ${undoHead}`);
    let nextUndoState = value.slice(1);
    // console.log(`nextUndoState is ${nextUndoState}`);
    return value.slice(1);
  });
  queue.update(_ => undoHead);
}

export function redo() {

}