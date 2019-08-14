<header class="sr-header">
  <Link to="/">
    <h1>
      Svelte Router
      <sup>{version}</sup>
    </h1>
  </Link>

  <a href="https://github.com/jikkai/svelte-router">Github</a>
</header>

<script>
  import { onMount } from 'svelte'
  import SvelteRouter, { Link } from '../../src'

  let version

  onMount(() => {
    version = SvelteRouter.__VERSION__
  })
</script>

<style>
  .sr-header {
    height: 64px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sr-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 300;
  }

  .sr-header sup {
    padding: 2px 4px;
    color: var(--white);
    font-size: 14px;
    background: var(--primary);
    border-radius: 4px;
  }
</style>
