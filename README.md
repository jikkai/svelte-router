# Svelte Router
![version](https://img.shields.io/npm/v/svelte-router.svg)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)

> Router component for Svelte

This branch is for Svelte v1.8.1+. For useage with Svelte v1.8.0-, see the [0.1.x branch](https://github.com/jikkai/svelte-router/tree/0.1.x).

## Docs
[Comming soon...](https://jikkai.github.io/svelte-router)

## Installation
Using npm:
```bash
$ npm install --save svelte-router
```

Using yarn:
```bash
$ yarn add svelte-router
```

## Examples
```html
<div>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/welcome">Welcome</RouterLink>
  <div id="app"></div>
</div>

<script>
  import SvelteRouter from 'svelte-router'
  import Home from './Home.html'
  import Welcome from './Welcome.html'

  const { createRouter, RouterLink } = SvelteRouter

  const router = createRouter({
    '/': Home,
    '/welcome': Welcome
  })

  export default {
    oncreate () {
      router.create('#app')
      // router.create(document.querySelector('#app'))
    },

    ondestroy () {
      router.destroy()
    },

    components: {
      RouterLink
    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
```

## TODO
- [ ] Add unit test
- [ ] Write a documentation
