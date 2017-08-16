'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}">
  <div id="${NavItems.id.id2}">
    <h1>View 2</h1>
  </div>
</section>
`
module.exports = elem
