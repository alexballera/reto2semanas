'use strict'

const home = document.createElement('div')
home.setAttribute('id', 'home')

const createHome = () => {
  const main = document.getElementById('main')
  main.appendChild(home)
}

export {createHome, home}
