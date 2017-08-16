'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id1}">
  <div id="${NavItems.id.id1}">
    <h1>View 1</h1>
  </div>
</section>
`
module.exports = elem
