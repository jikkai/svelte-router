import Introduction from './pages/Introduction.html'
import Installation from './pages/Installation.html'
import BasicUsage from './pages/guide/BasicUsage.html'
import API from './pages/guide/API.html'
import RouterLink from './pages/component/RouterLink.html'
import NotFound from './pages/NotFound.html'

export default {
  mode: 'hash',
  routes: {
    '/': Introduction,
    '/installation': Installation,
    '/guide/basic-usage': BasicUsage,
    '/guide/api': API,
    '/component/router-link': RouterLink,
    default: NotFound
  }
}
