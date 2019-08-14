import Introduction from './pages/Introduction'
import Installation from './pages/Installation'
import BasicUsage from './pages/guide/BasicUsage'
import PassingProps from './pages/guide/PassingProps'
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
  path: '/guide/passing-props',
  component: PassingProps,
  props: {
    foo: 'bar'
  }
}, {
  path: '/guide/api',
  component: API
}, {
  path: '/component/link',
  component: Link
}, {
  path: '(.*)',
  component: NotFound
}]
