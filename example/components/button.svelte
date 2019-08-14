<button
	class="alius-button is-primary"
	on:click={() => dispatch('click')}
>
  <slot></slot>
</button>

<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>
