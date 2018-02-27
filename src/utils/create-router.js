import history from './history'

const getPathRegex = (sections, pathRegex) => {
  return sections.map((value) => {
    if (value.match(new RegExp(`:${pathRegex}`)) !== null) {
      return `(${pathRegex})`
    }
    return value
  }).join('\\/')
}

const getPathVariables = (sections, matches, pathRegex) => {
  const keys = sections.filter((value) => {
    return value.match(new RegExp(`:${pathRegex}`)) !== null
  }).map((value) => {
    return value.match(new RegExp(`:(${pathRegex})`))[1]
  })
  const pathVariables = {}
  keys.forEach((value, index) => {
    const groupIndex = index + 1
    pathVariables[value] = matches[groupIndex]
  })
  return pathVariables
}

const getContent = (paths, path, target, pathVariables) => {
  let { Component, props } = paths[path]
  if (!Component) Component = paths[path]
  let extraData = {
    data: {
      path: pathVariables
    }
  }
  props = props || {}
  if (Object.prototype.hasOwnProperty.call(props, 'data')) {
    props.data['path'] = pathVariables
    extraData = {}
  }
  return new Component({
    target: target,
    ...props,
    ...extraData
  })
}

const createRouter = (paths, options = {}) => {
  let _target // target DOM
  let _unlisten // history listener
  let _content // route instance

  const pathRegex = options['pathRegex'] ? options['pathRegex'] : '[a-zA-Z]+'
  const defaultRoute = options['defaultRoute'] ? options['defaultRoute'] : 'default'

  const handleRouteChange = location => {
    let found = false
    if (_content) _content.destroy()

    for (let path in paths) {
      if (Object.prototype.hasOwnProperty.call(paths, path)) {
        const sections = path.split('/')
        const regexPath = getPathRegex(sections, pathRegex)
        const matches = location.pathname.match(new RegExp(`^${regexPath}$`))
        if (matches !== null) {
          const pathVariables = getPathVariables(sections, matches, pathRegex)
          _content = getContent(paths, path, _target, pathVariables)
          found = true
          break
        }
      }
    }
    if (!found && paths[defaultRoute]) {
      _content = getContent(paths, defaultRoute, _target, {})
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
