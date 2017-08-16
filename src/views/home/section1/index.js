'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<h2>Sección 1</h2>
`
export default () => {
  home.appendChild(Section1)
}
