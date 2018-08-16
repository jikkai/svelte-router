# Svelte Router

![version](https://img.shields.io/npm/v/svelte-router.svg)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)

> Router component for Svelte

This branch is for Svelte v1.8.1+. For usage with Svelte v1.8.0-, see the [0.1.x branch](https://github.com/jikkai/svelte-router/tree/0.1.x).

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
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/welcome">Welcome</RouterLink>
  <div id="app"></div>
</div>

<script>
  import { Store } from 'svelte/store'
  import SvelteRouter from 'svelte-router'
  import Home from './Home.html'
  import Welcome from './Welcome.html'
  import Animal from './Animal.html'

  const router = new SvelteRouter({
    mode: 'hash',
    routes: {
      '/': Home,
      '/welcome': Welcome,
      '/animal': {
        Component: Animal,
        props: {
          store: new Store({
            animal: 'dog',
            sheep: 'baaah',
            moo: {
              cow: true,
              foo: 'bar'
            }
          }),
          data: {
            qwert: 'asdf'
          }
        }
      }
    }
  })

  export default {
    oncreate () {
      router.create('#app')
    },

    ondestroy () {
      router.destroy()
    },

    components: {
      RouterLink: SvelteRouter.RouterLink
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
* `listen(fn: function)`

### RouterLink

* `replace`: boolean
* `match`: string

## Contributors

* [@rumpytim](https://github.com/rumpytim)
* [@RobBrazier](https://github.com/RobBrazier)
* [@stalkerg](https://github.com/stalkerg)
