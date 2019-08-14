<section>
  {@html content}

  <Button on:click={handleClick}>Getting Started</Button>
</section>

<script>
  import SvelteRouter from '../../src'
  import Button from '../components/button'
  import content from '../docs/Introduction'

  function handleClick () {
    SvelteRouter.push('/guide/basic-usage')
  }
</script>
