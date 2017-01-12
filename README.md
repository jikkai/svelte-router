# Svelte Router
![version](https://img.shields.io/npm/v/svelte-router.svg)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)

> [WIP]Router component for Svelte

## Installation
Using npm:
```bash
$ npm install --save svelte-router
```

Using yarn:
```bash
$ yarn add svelte-router
```

```html
<div>
  <Link to="/home">Home</Link>
  <div id="app"></div>
</div>

<script>
  import SvelteRouter from 'svelte-router'
  import Home from './Home.html'

  const router = createRouter({
    '/': Home
  })

  export default {
    onrender () {
      router.start('#app')
      // router.start(document.querySelector('#app'))
    },

    onteardown() {
      router.teardown()
    },

    components: {
      Link
    }
  }
</script>


</script>
```

## TODO
- [ ] Add unit test
- [ ] Support BrowserHistory mode
- [ ] Write a documentation
