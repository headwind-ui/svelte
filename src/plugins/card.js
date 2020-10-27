//@apply inline-block py-0 px-1 rounded-full bg-neutral-100 text-neutral-500 mr-2 text-xs;
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  const card = {
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme('borderRadius.lg'),
      overflow: 'hidden',
      boxShadow: theme('boxShadow.md'),
      transitionProperty: 'all',
      transitionDuration: '300ms',
      lineHeight: 1,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      '& .card-preview': {
        width: '100%',
      },
      '& img': {
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
      },
      '& .card-body': {
        width: '100%',
      },
      '& [slot="title"]': {
        fontSize: theme('fontSize.lg'),
        padding: theme('spacing.2'),
      },
      '&-content': {
        padding: `${theme('spacing.0')} ${theme('spacing.2')}`,
      },
      '& [slot="actions"]': {
        display: 'flex',
        paddingTop: theme('spacing.2'),
        '& > *': {
          display: 'block',
          width: '100%',
          borderRadius: '0',
        },
      },
    },
  }
  addComponents(card)
})
