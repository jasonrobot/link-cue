<script>
	import { queue, popFromQueue } from './QueueStore'
</script>

<ol id="queue">
	{#each $queue as link, i}
	  {#if i === 0}
	    <li on:click={popFromQueue}>
				<a href={link}>{link}</a>
	    </li>
	  {:else}
	    <li>{link}</li>
	  {/if}
	{/each}
</ol>