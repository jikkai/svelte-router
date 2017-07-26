import pathToRegexp from 'path-to-regexp'
import history from '~utils/history'

const createRouter = (options) => {
  let _target
  let _unlisten
  let _content

  if (typeof Route === 'function') {
    return (options) => {
      _content = new Route(options)
      return _content
    }
  }

  const handleRouteChange = () => {
    if (_content && _content._fragment) _content.destroy()
    const pathname = history.location.pathname

    for (let path in options) {
      if (options.hasOwnProperty(path)) {
        if (pathname === path) {
          _content = new options[path]({
            target: _target,
            data: pathToRegexp.parse(path)
          })
          break
        }
      }
    }
  }

  return {
    create (targetElement) {
      _target = typeof targetElement === 'string'
        ? document.querySelector(targetElement)
        : targetElement

       _unlisten = history.listen(handleRouteChange)
      handleRouteChange()
    },
    destroy () {
      if (_unlisten) {
        _unlisten()
        _unlisten = undefined
      }
    }
  }
}

export default createRouter
