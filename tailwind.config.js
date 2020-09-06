const colors = require('./src/colors')
const button = require('./src/plugins/button')
module.exports = {
  purge: [],
  theme: {
    extend: {},
    colors,
  },
  variants: {},
  plugins: [button],
}
