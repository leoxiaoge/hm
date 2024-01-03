import Globals from './globals'

function init () {
  console.log(Globals)
}

const hm = {
  init,
  version: Globals.version
}

export default hm