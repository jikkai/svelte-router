import history from './history'

const createRouter = options => {
  let _target // target DOM
  let _unlisten // history listener
  let _content // route instance

  const handleRouteChange = location => {
    if (_content) _content.destroy()

    for (let path in options) {
      if (options.hasOwnProperty(path)) {
        if (location.pathname === path) {
          _content = new options[path]({
            target: _target
          })
          break
        }
      }
    }
  }

  return {
    /**
     * create
     * @param {HTMLElement} targetElement
     */
    create (targetElement) {
      _target = typeof targetElement === 'string'
        ? document.querySelector(targetElement)
        : targetElement
      _unlisten = history.listen(handleRouteChange)

      handleRouteChange(history.location)
    },
    /**
     * destory
     */
    destroy () {
      if (_unlisten) {
        _unlisten()
        _unlisten = undefined
      }
    }
  }
}

createRouter.push = path => { history.push(path) }
createRouter.replace = path => { history.replace(path) }
createRouter.go = n => { history.go(n) }
createRouter.listen = fn => { history.listen(fn) }

export default createRouter
