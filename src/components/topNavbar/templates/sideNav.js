'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../navigation'

const sideNav = yo`
<ul class="side-nav" id="mobile-demo">
  <li class="waves-effect waves-blue" id="link-seccion-sidenav"><a href=${NavItems.links.home}>${NavItems.items.home}</a></li>
  <li class="divider"></li>
  <li><a href=${NavItems.links.link1}>${NavItems.items.item1}</a></li>
  <li class="divider"></li>
  <li><a href=${NavItems.links.link2}>${NavItems.items.item2}</a></li>
  <li class="divider"></li>
  <li><a href=${NavItems.links.link3}>${NavItems.items.item3}</a></li>
  <li class="divider"></li>
  <li><a href=${NavItems.links.link4}>${NavItems.items.item4}</a></li>
  <li class="divider"></li>
  <li><a href=${NavItems.links.link5}>${NavItems.items.item5}</a></li>
  <li class="divider"></li>
</ul>
`
module.exports = sideNav
