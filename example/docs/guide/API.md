# API

## Router Construction Options

### target

* type: `string` | `HTMLElement`

### mode

* type: `string`
* enum: `'hash' | 'history'`
* default: `'hash'`

### routes

* type: `array`

```javascript
const router = new SvelteRouter({
  target: '#app',
  mode: 'hash',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/welcome',
    component: Welcome
  }, {
    path: '*',
    component: NotFound
  }]
})
```

## Router Instance Methods

### init

```javascript
router.init()
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

### goBack

```javascript
SvelteRouter.goBack()
```

### goForward

```javascript
SvelteRouter.goForward()
```

### listen

```javascript
SvelteRouter.listen(fn: function)
```
