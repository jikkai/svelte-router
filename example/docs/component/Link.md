# Link

`<Link>` is the component for enabling user navigation in a router-enabled app.

## Props

| name | type | default |
| --- | --- | --- |
| to | `string` | - |
| replace | `boolean` | `false` |
| className | `string` | `''` |
| activeClassName | `string` | `'router-link-active'` |

## Example

```html
<Link to="/foo">go Foo</Link>

<script>
  import { Link } from 'svelte-router'
</script>
```
