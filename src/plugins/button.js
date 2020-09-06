const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const button = {
    '.btn': {
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
    },
    ...Object.entries(theme('colors'))
      .map(([color, variants]) => ({
        [`.btn-default-${color}`]: {
          backgroundColor: `${variants['600']}`,
          color: 'white',
          '&:hover': {
            backgroundColor: `${variants['800']}`,
          },
        },
        [`.btn-secondary-${color}`]: {
          backgroundColor: 'transparent',
          borderWidth: `${theme('borderWidth.default')}`,
          borderColor: `${variants['600']}`,
          color: `${variants['600']}`,
          '&:hover': {
            borderColor: `${variants['800']}`,
            color: `${variants['800']}`,
          },
        },
      }))
      .reduce((a, b) => Object.assign(a, b), {}),
  }
  addComponents(button)
})
