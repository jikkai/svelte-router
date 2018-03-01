import history from './history'

const DYNAMIC_PATH_REGEX = '[a-zA-Z]+'
const DEFAULT_ROUTE = 'default'

const getPathRegex = (sections) => {
  return sections.map((value) => {
    if (value.match(new RegExp(`:${DYNAMIC_PATH_REGEX}`)) !== null) {
      return `([a-zA-Z0-9]+)`
    }
    return value
  }).join('\\/')
}

const getPathVariables = (sections, matches) => {
  const keys = sections.filter((value) => {
    return value.match(new RegExp(`:${DYNAMIC_PATH_REGEX}`)) !== null
  }).map((value) => {
    return value.match(new RegExp(`:(${DYNAMIC_PATH_REGEX})`))[1]
  })
  const pathVariables = {}
  keys.forEach((value, index) => {
    const groupIndex = index + 1
    pathVariables[value] = matches[groupIndex]
  })
  return pathVariables
}

const getContent = (options, path, target, pathVariables, onGlobalActivate) => {
  let { Component, props, onActivate } = options[path]
  if (!Component) Component = options[path]
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
  let component = new Component({
    target: target,
    ...props,
    ...extraData
  })

  if (onActivate != null) {
    onActivate({
      path,
      props,
      component
    })
  }

  if (onGlobalActivate != null) {
    onGlobalActivate({
      path,
      props,
      component
    })
  }

  return component
}

const createRouter = (options, onGlobalActivate) => {
  let _target // target DOM
  let _unlisten // history listener
  let _content // route instance

  const handleRouteChange = location => {
    let found = false
    if (_content) _content.destroy()

    for (let path in options) {
      if (Object.prototype.hasOwnProperty.call(options, path)) {
        const sections = path.split('/')
        const regexPath = getPathRegex(sections)
        const matches = location.pathname.match(new RegExp(`^${regexPath}$`))
        if (matches !== null) {
          const pathVariables = getPathVariables(sections, matches)
          _content = getContent(options, path, _target, pathVariables, onGlobalActivate)
          found = true
          break
        }
      }
    }
    if (!found && options[DEFAULT_ROUTE]) {
      _content = getContent(options, DEFAULT_ROUTE, _target, {}, onGlobalActivate)
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
