'use strict'
import yo from 'yo-yo'

const DropdownDesktop = yo`
<ul id='dropdown' class='dropdown-content'>
  <li class="waves-green"><a href="#alenta">¿Qué es Alenta?</a></li>
  <li class="divider"></li>
  <li class="item waves-green"><a href="#localizacion">Localización</a></li>
  <li class="divider"></li>
  <li class="item waves-green"><a href="#proyecto">El Proyecto</a></li>
  <li class="divider"></li>
</ul>
`
const DropdownMobile = yo`
<ul id='dropdown2' class='dropdown-content'>
  <li class="waves-green"><a href="#alenta">¿Qué es Alenta?</a></li>
  <li class="divider"></li>
  <li class="item waves-green"><a href="#localizacion">Localización</a></li>
  <li class="divider"></li>
  <li class="item waves-green"><a href="#proyecto">El Proyecto</a></li>
  <li class="divider"></li>
</ul>
`
export { DropdownDesktop, DropdownMobile }
