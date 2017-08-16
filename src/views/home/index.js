'use strict'
import {createHome} from './createHome'
import Section1 from './section1'
import Section2 from './section2'
import loader from '../../components/loader'
import slider from './slider'

export default () => {
  createHome()
  loader()
  slider()
  Section1()
  Section2()
}
