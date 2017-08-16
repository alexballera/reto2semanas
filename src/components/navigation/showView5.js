'use strict'
import {$app} from '../layout/app'
// import Common from './Common'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showView5 = () => {
  hideViews()
  // Common()

  const SectionID = '#seccion-' + `${NavItems.id.id5}`
  const liID = '#li-' + `${NavItems.id.id5}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  document.title = `${NavItems.title.view5}`
}

module.exports = showView5
