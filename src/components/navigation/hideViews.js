'use strict'
import {$app} from '../layout/app'
import {NavItems} from '../navigation'

export default () => {
  // $app.find('#navbar-top').hide()
  // $app.find('#link-seccion').hide()
  // $app.find('#link-seccion-sidenav').hide()
  $app.find('#sliderHome').hide()
  $app.find('#home').hide()
  $app.find('#loader').hide()

  // Navegacion:
  const id = {
    seccion: {
      view1: '#seccion-' + `${NavItems.id.id1}`,
      view2: '#seccion-' + `${NavItems.id.id2}`,
      view3: '#seccion-' + `${NavItems.id.id3}`,
      view4: '#seccion-' + `${NavItems.id.id4}`,
      view5: '#seccion-' + `${NavItems.id.id5}`,
      nf: '#seccion-' + `${NavItems.id.nf}`
    },
    li: {
      view1: '#li-' + `${NavItems.id.id1}`,
      view2: '#li-' + `${NavItems.id.id2}`,
      view3: '#li-' + `${NavItems.id.id3}`,
      view4: '#li-' + `${NavItems.id.id4}`,
      view5: '#li-' + `${NavItems.id.id5}`
    }
  }

  $app.find(id.seccion.view1).hide()
  $app.find(id.li.view1).removeClass('activado')

  $app.find(id.seccion.view2).hide()
  $app.find(id.li.view2).removeClass('activado')

  $app.find(id.seccion.view3).hide()
  $app.find(id.li.view3).removeClass('activado')

  $app.find(id.seccion.view4).hide()
  $app.find(id.li.view4).removeClass('activado')

  $app.find(id.seccion.view5).hide()
  $app.find(id.li.view5).removeClass('activado')

  $app.find(id.seccion.nf).hide()
}
