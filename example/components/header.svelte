<header class="sr-header">
  <Link to="/">
    <h1>Svelte Router</h1>
  </Link>
</header>

<script>
  import { Link } from '../../src'
</script>

<style>
  .sr-header {
    height: 64px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
  }

  .sr-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 300;
  }
</style>
