'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../navigation'

const Desktop = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="waves-effect waves-blue" id="li-${NavItems.id.home}"><a href=${NavItems.links.home} >${NavItems.items.home}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id1}"><a href=${NavItems.links.link1} >${NavItems.items.item1}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id2}"><a href=${NavItems.links.link2}>${NavItems.items.item2}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id3}"><a href=${NavItems.links.link3}>${NavItems.items.item3}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id4}"><a href=${NavItems.links.link4}>${NavItems.items.item4}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id5}"><a href=${NavItems.links.link5} >${NavItems.items.item5}</a></li>
</ul>
`
const DesktopDropdown = yo`
<ul class="navbar-top-desktop right hide-on-med-and-down">
  <li class="active" id="link-home"><a class='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>${NavItems.items.home} <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion"><a href=${NavItems.links.home} >${NavItems.items.home}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id1}"><a href=${NavItems.links.link1} >${NavItems.items.item1}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id2}"><a href=${NavItems.links.link2}>${NavItems.items.item2}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id3}"><a href=${NavItems.links.link3}>${NavItems.items.item3}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id4}"><a href=${NavItems.links.link4}>${NavItems.items.item4}</a></li>
  <li class="waves-effect waves-blue" id="li-${NavItems.id.id5}"><a href=${NavItems.links.link5} >${NavItems.items.item5}</a></li>
</ul>
`
export {Desktop, DesktopDropdown}
