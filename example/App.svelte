<Header></Header>
<section class="sr-container">
  <Menu></Menu>

  <main class="sr-main">
    <div use:create></div>
  </main>
</section>

<script>
  import prism from  'prismjs/prism'

  import SvelteRouter from '../src'
  import routes from './routes'
  import Header from './components/header'
  import Menu from './components/menu'

  function create (node) {
    const router = new SvelteRouter({
      target: node,
      mode: 'hash',
      routes
    })

    SvelteRouter.listen(() => {
      setTimeout(() => {
        prism.highlightAll()
      })
    })

    return {
      destroy () {
        router.destroy()
      }
    }
  }
</script>

<style>
  :global(html, body, #example) {
    height: 100%;
  }
  :global(#app) {
    max-width: 740px;
    margin: auto;
  }

  .sr-container {
    height: calc(100% - 64px);
    display: flex;
  }

  .sr-main {
    width: calc(100% - 240px);
    height: 100%;
    padding: 12px 36px;
    overflow: auto;
  }

  @media screen and (max-width: 810px) {
    .sr-container {
      flex-direction: column;
    }

    .sr-main {
      width: 100%;
      overflow: initial;
    }
  }
</style>
