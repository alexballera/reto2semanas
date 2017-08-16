'use strict'
import {$app} from '../layout/app'

export default () => {
  $app.find('#navbar-top').show('slow')
  $app.find('#link-home').hide()
  $app.find('#link-alenta').hide()
  $app.find('#link-seccion').show()
  $app.find('#link-seccion-sidenav').show()
}
