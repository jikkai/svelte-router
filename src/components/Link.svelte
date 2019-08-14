<a
  class="{computedClassName}"
  href="{href}"
  on:click={handleNavigate}
>
  <slot></slot>
</a>

<script>
  import { onMount } from 'svelte'
  import SvelteRouter from '../router'

  export let to
  export let replace = false
  export let className = ''
  export let activeClassName = 'router-link-active'

  let href = ''
  let computedClassName = className

  const handleNavigate = e => {
    e.preventDefault()
    SvelteRouter[replace ? 'replace' : 'push'](to)
  }

  function computeClassName () {
    if (SvelteRouter.history.location.pathname === to) {
      computedClassName = `${className} ${activeClassName}`
    } else {
      computedClassName = className
    }
  }

  onMount(() => {
    computeClassName()
    SvelteRouter.listen(computeClassName)

    href = SvelteRouter.mode === 'hash' ? `/#${to}` : to
  })
</script>
