const DYNAMIC_PATH_REGEX = '[0-9A-Za-z._-]+'

export const getContent = (options, path, target, pathVariables) => {
  let { Component, props } = options[path]
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
  return new Component({
    target: target,
    ...props,
    ...extraData
  })
}

export const getPathVariables = (sections, matches) => {
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

export const getPathRegex = sections => {
  return sections.map((value) => {
    if (value.match(new RegExp(`:${DYNAMIC_PATH_REGEX}`)) !== null) {
      return `([0-9A-Za-z._-]+)`
    }
    return value
  }).join('\\/')
}
