'use strict'
import { app } from './app'

export default () => {
  const main = document.createElement('main')
  main.setAttribute('id', 'main')
  main.setAttribute('class', 'main')
  app.appendChild(main)
}
