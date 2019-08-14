<h1>404 Not Found</h1>
<Button on:click={goHome}>Go Home</Button>

<script>
  import SvelteRouter from '../../src'
  import Button from '../components/button'

  function goHome () {
    SvelteRouter.replace('/')
  }
</script>
