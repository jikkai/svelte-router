# Basic Usage

It is the first step that is troublesome.

## Foo.svelte

```html
<h1>Foo</h1>
```

## Bar.svelte

```html
<h1>Bar</h1>
```

## App.svelte

```html
<div>
  <Link to="/foo">Foo</Link>
  <Link to="/bar">Bar</Link>
  <div use:create></div>
</div>

<script>
  import SvelteRouter, { Link } from 'svelte-router'
  import Foo from './Foo.svelte'
  import Bar from './Bar.svelte'

  function create (node) {
    const router = new SvelteRouter({
      target: node,
      mode: 'hash',
      routes: [{
        path: '/foo',
        component: Foo
      }, {
        path: '/bar',
        component: Bar
      }, {
        path: '*',
        component: Foo
      }]
    })

    router.init()

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

## main.js

```javascript
import App from './App.svelte'

new App({
  target: document.querySelector('#main')
})
```
