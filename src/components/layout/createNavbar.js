'use strict'
import { app } from './app'

const navbar = document.createElement('header')
navbar.setAttribute('id', 'navbar-top')

export default () => {
  app.appendChild(navbar)
}
