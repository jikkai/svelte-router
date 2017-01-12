import RouteParser from 'route-parser'
import history from './history'

const createRouter = (options) => {
  let _content
  let _unlisten
  let _target

  const createRouteBehavior = (Route) => {
    if (typeof Route === 'function') {
      return (options) => {
        _content = new Route(options)
        return _content
      }
    }

    if (typeof Route === 'object') {
      if (Route.redirect) {
        return () => history.push(Route.redirect)
      }
    }

    if (typeof Route === 'string') {
      return () => history.push(Route)
    }
  }

  const routeData = Object.keys(options)
    .map(key => [key, options[key]])
    .map(([key, value]) => ({
      route: new RouteParser(key),
      behavior: createRouteBehavior(value)
    }))

  const handleRouteChange = () => {
    if (_content && _content._fragment) _content.teardown()

    for (let i = 0; i < routeData.length; i++) {
      const data = routeData[i].route.match(history.location.pathname)
      if (data) {
        routeData[i].behavior({ target: _target, data })
        break
      }
    }
  }

  return {
    start (targetElement) {
      _target = typeof targetElement === 'string'
        ? document.querySelector(targetElement) : targetElement

      _unlisten = history.listen(handleRouteChange)
      handleRouteChange()
    },
    teardown () {
      if (_unlisten) {
        _unlisten()
        _unlisten = undefined
      }
    }
  }
}

export default createRouter
