import createBrowserHistory from 'history/es/createBrowserHistory'
import createHashHistory from 'history/es/createHashHistory'

const history = mode => {
  switch (mode) {
    case 'history':
      return createBrowserHistory()
    default:
      return createHashHistory()
  }
}

export default history
