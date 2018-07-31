import createHistory from './history'
import {
  getPathRegex,
  getPathVariables,
  getContent
} from './utils'

const DEFAULT_ROUTE = 'default'

let history

class SvelteRouter {
  target = null
  listener = null
  content = null
  options = {}

  constructor (options) {
    this.options = options
    history = createHistory(options.mode)
    Object.defineProperty(window, 'history', {
      get: () => history
    })
  }

  create (target) {
    this.target = typeof target === 'string'
      ? document.querySelector(target)
      : target

    this.listener = history.listen(this.handleRouteChange)
    this.handleRouteChange(history.location)
  }

  destroy () {
    if (this.listener) {
      this.listener()
      this.listener = null
    }
  }

  handleRouteChange = location => {
    let found = false
    if (this.content) {
      this.content.destroy()
      this.content = null
    }

    for (let path in this.options.routes) {
      if (Object.prototype.hasOwnProperty.call(this.options.routes, path)) {
        const sections = path.split('/')
        const regexPath = getPathRegex(sections)
        const matches = location.pathname.match(new RegExp(`^${regexPath}$`))
        if (matches !== null) {
          const pathVariables = getPathVariables(sections, matches)
          this.content = getContent(this.options.routes, path, this.target, pathVariables)
          found = true
          break
        }
      }
    }
    if (!found && this.options.routes[DEFAULT_ROUTE]) {
      this.content = getContent(this.options.routes, DEFAULT_ROUTE, this.target, {})
    }
  }
}

SvelteRouter.push = path => { history.push(path) }
SvelteRouter.replace = path => { history.replace(path) }
SvelteRouter.go = n => { history.go(n) }
SvelteRouter.listen = fn => { history.listen(fn) }

SvelteRouter.__VERSION__ = process.env.APP_VERSION

export default SvelteRouter
