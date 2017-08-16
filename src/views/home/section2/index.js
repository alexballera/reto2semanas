'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section2 = yo`
<h2>Sección 2</h2>
`
export default () => {
  home.appendChild(Section2)
}
