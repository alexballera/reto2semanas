'use strict'
import { app } from './app'

const div = document.createElement('div')
div.setAttribute('id', 'loader')
div.setAttribute('class', 'loader valign-wrapper')

export default () => {
  app.appendChild(div)
}
