//@apply inline-block py-0 px-1 rounded-full bg-neutral-100 text-neutral-500 mr-2 text-xs;
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const badge = {
    '.badge': {
      display: 'inline-block',
      lineHeight: 1,
      borderRadius: theme('borderRadius.full'),
      overflow: 'hidden',
      '& span': {
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: theme('fontSize.xs'),
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        transitionProperty: 'all',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        '& [slot="value"]': {
          borderRadius: theme('borderRadius.full'),
          width: `${theme('spacing.1')} !important`,
          // height: `${theme('spacing.3')} !important`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: theme('spacing.1'),
          '& svg': {
            width: `${theme('spacing.2')} !important`,
            height: `${theme('spacing.2')} !important`,
          },
        },
        '&.flex-row-reverse [slot="value"]': {
          marginLeft: theme('spacing.1'),
          marginRight: theme('spacing.0'),
        },
      },
    },
    ...Object.entries(theme('colors'))
      .map(([color, variants]) => ({
        [`.badge-${color}`]: {
          backgroundColor: `${variants['100']}`,
          color: `${variants['600']}`,
          '& [slot="value"]': {
            backgroundColor: `${variants['600']}`,
            color: `white`,
          },
        },
      }))
      .reduce((a, b) => Object.assign(a, b), {}),
  }
  addComponents(badge)
})
