const plugin = require('tailwindcss/plugin')
module.exports = plugin(function ({ addComponents, theme }) {
  //h-4 w-4 inline-block overflow-visible
  const icon = {
    '.icon': {
      width: theme('spacing.4'),
      heigth: theme('spacing.4'),
      display: 'inline-block',
      overflow: 'visible',
    },
  }
  addComponents(icon)
})
