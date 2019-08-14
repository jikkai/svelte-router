# Passing Props

Passing props to route components by using `props`.

## Foo.svelte

```html
<h1>Hello {title}</h1>

<script>
  export let title
</script>
```

## App.svelte

```html
<div>
  <div use:create></div>
</div>

<script>
  import SvelteRouter from 'svelte-router'
  import Foo from './Foo.svelte'

  function create (node) {
    const router = new SvelteRouter({
      target: node,
      routes: [{
        path: '/foo',
        component: Foo,
        props: {
          title: 'Foo'
        }
      }]
    })

    return {
      destroy () {
        router.destroy()
      }
    }
  }
</script>
```
