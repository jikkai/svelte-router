# Svelte Router

![version](https://img.shields.io/npm/v/svelte-router.svg)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)

> Router component for Svelte

This branch is for Svelte v3.0.0+. For usage with Svelte v1.8.0+, see the [v2 branch](https://github.com/jikkai/svelte-router/tree/v2). For usage with Svelte v1.8.0-, see the [0.1.x branch](https://github.com/jikkai/svelte-router/tree/0.1.x).

## Installation

Using npm:

```bash
npm install --save svelte-router
```

Using yarn:

```bash
yarn add svelte-router
```

## Examples

```html
<div>
  <Link to="/">Home</Link>
  <Link to="/welcome">Welcome</Link>
  <div use:create></div>
</div>

<script>
  import SvelteRouter, { Link } from 'svelte-router'
  import Home from './Home.svelte'
  import Welcome from './Welcome.svelte'

  function create (node) {
    const router = new SvelteRouter({
      target: node,
      mode: 'hash',
      routes: [{
        path: '/',
        component: Home
      }, {
        path: '/welcome',
        component: Welcome
      }]
    })

    return {
      destroy () {
        router.destroy()
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
```

## API

### SvelteRouter

* `push(path: string)`
* `replace(path: string)`
* `go(n: number)`
* `goBack()`
* `goForward()`
* `listen(fn: function)`

### Link

* `to`: string
* `replace`: boolean
* `className`: string
* `activeClassName`: string

## Contributors

* [@rumpytim](https://github.com/rumpytim)
* [@RobBrazier](https://github.com/RobBrazier)
* [@stalkerg](https://github.com/stalkerg)
