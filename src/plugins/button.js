const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const button = {
    '.btn': {
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      lineHeight: 1.25,
      transitionProperty: 'all',
      transitionDuration: '300ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      '&[disabled]': {
        pointerEvents: 'none',
        opacity: 0.6,
      },
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
        [`.btn-ghost-${color}`]: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: `${variants['600']}`,
          '&:hover': {
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            color: `${variants['800']}`,
          },
        },
        [`.btn-icon-only-${color}`]: {
          backgroundColor: 'transparent',
          color: `${variants['600']}`,
          '&:hover': {
            color: `${variants['800']}`,
          },
        },
      }))
      .reduce((a, b) => Object.assign(a, b), {}),
  }
  addComponents(button)
})
