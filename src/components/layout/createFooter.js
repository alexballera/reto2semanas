'use strict'
import { app } from './app'

const footer = document.createElement('footer')
footer.setAttribute('id', 'footer')
footer.setAttribute('class', 'footer')

export default () => {
  app.appendChild(footer)
}
