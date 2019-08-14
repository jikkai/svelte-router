import { createBrowserHistory, createHashHistory } from 'history'
import pathToRegexp from 'path-to-regexp'

class SvelteRouter {
  constructor ({ target, mode = 'hash', routes = [] }) {
    let history
    switch (mode) {
      case 'hash':
        history = createHashHistory()
        break
      case 'history':
        history = createBrowserHistory()
        break
      default:
        history = createHashHistory()
        break
    }

    SvelteRouter.__VERSION__ = process.env.APP_VERSION
    SvelteRouter.mode = mode
    SvelteRouter.history = history
    SvelteRouter.push = path => history.push(path)
    SvelteRouter.replace = path => history.replace(path)
    SvelteRouter.go = n => history.go(n)
    SvelteRouter.goBack = () => history.goBack()
    SvelteRouter.goForward = () => history.goForward()
    SvelteRouter.listen = fn => history.listen(fn)

    this.$content = null
    this.target = typeof target === 'string' ? document.querySelector(target) : target
    this.routes = routes
    this.$listener = history.listen(this.handleRouteChange.bind(this))

    this.handleRouteChange(history.location)
  }

  destroy () {
    if (this.$listener) {
      this.$listener()
      this.$listener = null
    }
  }

  handleRouteChange ({ pathname }) {
    let matchedRoute

    for (const route of this.routes) {
      const regexp = pathToRegexp(route.path)
      if (regexp.test(pathname)) {
        matchedRoute = route
        break
      }
    }

    if (matchedRoute && matchedRoute.component) {
      if (this.$content) this.$content.$destroy()
      const { component: Component, props } = matchedRoute

      this.$content = new Component({
        target: this.target,
        props
      })
    }
  }
}

export default SvelteRouter
