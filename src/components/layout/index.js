'use strict'
import createNavbar from './createNavbar'
import createMain from './createMain'
import createFooter from './createFooter'
import createLoader from './createLoader'

export default () => {
  createLoader()
  createNavbar()
  createMain()
  createFooter()
}
