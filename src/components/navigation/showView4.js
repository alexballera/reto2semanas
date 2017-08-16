'use strict'
import {$app} from '../layout/app'
// import Common from './Common'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showView4 = () => {
  hideViews()
  // Common()

  const SectionID = '#seccion-' + `${NavItems.id.id4}`
  const liID = '#li-' + `${NavItems.id.id4}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  document.title = `${NavItems.title.view4}`
}

module.exports = showView4
