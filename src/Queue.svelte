<script>
  import { queue, popFromQueue } from './QueueStore'

  /**
   * Wraps a function in a setTimeout
   */
  function delay(fn, time = 0) {
    return function() {
      setTimeout(fn, time);
    }
  }
</script>

<ol id="queue">
  {#each $queue as link, i}
	{#if i === 0}
	  <li>
		<a href={link} target="_blank" on:click={delay(popFromQueue)}>{link}</a>
	  </li>
	{:else}
      <li>{link}</li>
    {/if}
  {/each}
</ol>
