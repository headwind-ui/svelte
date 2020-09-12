const colors = require('./src/colors')
const button = require('./src/plugins/button')
const badge = require('./src/plugins/badge')
const card = require('./src/plugins/card')
const icon = require('./src/plugins/icon')
const pagination = require('./src/plugins/pagination')
module.exports = {
  purge: [],
  theme: {
    extend: {},
    colors,
  },
  variants: {},
  plugins: [button, badge, card, icon, pagination],
}
