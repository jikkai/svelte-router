# Basic Usage

It is the first step that is troublesome.

## Foo.html

```html
<h1>Foo</h1>
```

## Bar.html

```html
<h1>Bar</h1>
```

## App.html

```html
<div>
  <RouterLink to="/foo">Foo</RouterLink>
  <RouterLink to="/bar">Bar</RouterLink>
  <div id="app"></div>
</div>

<script>
  import SvelteRouter from 'svelte-router'
  import Foo from './Foo.html'
  import Bar from './Bar.html'

  const router = new SvelteRouter({
    routes: {
      '/foo': Foo,
      '/bar': Bar
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

## main.js

```javascript
import App from './App.html'

new App({
  target: document.querySelector('#main')
})
```
