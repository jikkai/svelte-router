import Introduction from './pages/Introduction'
import Installation from './pages/Installation'
import BasicUsage from './pages/guide/BasicUsage'
import API from './pages/guide/API'
import Link from './pages/component/Link'
import NotFound from './pages/NotFound'

export default [{
  path: '/',
  component: Introduction
}, {
  path: '/installation',
  component: Installation
}, {
  path: '/guide/basic-usage',
  component: BasicUsage
}, {
  path: '/guide/api',
  component: API
}, {
  path: '/component/router',
  component: Link
}, {
  path: '*',
  component: NotFound
}]
