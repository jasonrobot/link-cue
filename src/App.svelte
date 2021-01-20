<script>
  import Queue from './Queue.svelte'
  import {queue, popFromQueue} from './QueueStore'

  let newLink

  /**
   * Add a link to the queue from input bound to newLink
   */
  function addToQueue(){
	if (newLink) {
	  queue.set([...$queue, newLink])
	  newLink = ''
	}
  }

  function keydownHandler({key}) {
    if (key === 'Enter') {
      addToQueue()
    }
  }
</script>

<input bind:value={newLink} on:keydown={keydownHandler}>
<button id="add" on:click={addToQueue}>
	Add
</button>
<button id="pop" on:click={popFromQueue}>
	Pop
</button>
<Queue/>
