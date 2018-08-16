# API

## Router Construction Options

### mode

* type: `string`
* enum: `'hash' | 'history'`
* default: `'hash'`

### routes

* type: `object`

```javascript
import { Store } from 'svelte/store'

const router = new SvelteRouter({
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
    },
    default: NotFound
  }
})
```

## Router Instance Methods

### create

```javascript
router.create(string | HTMLElement)
```

### destroy

```javascript
router.destroy()
```

## Router Methods

### push

```javascript
SvelteRouter.push(path: string)
```

### replace

```javascript
SvelteRouter.replace(path: string)
```

### go

```javascript
SvelteRouter.go(n: number)
```

### listen

```javascript
SvelteRouter.listen(fn: function)
```
