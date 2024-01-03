const packageJson = require('../package.json')
const Globals = {
  name: packageJson.name,
  version: packageJson.version,
  env: process.env.NODE_ENV,
}

export default Globals