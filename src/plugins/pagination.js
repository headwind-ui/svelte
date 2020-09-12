const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  const pagination = {
    '.pagination': {
      display: 'grid',
      width: '100%',
      borderTop: theme('borderWidth.2'),
      borderStyle: 'solid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: `repeat(5,${theme('spacing.8')})`,
      gridTemplateAreas:
        '"prev next" "pages pages" "first last" "pageCount pageCount" "itemsCount itemsCount"',

      '.first': {
        gridArea: 'first',
      },
      '.last': {
        gridArea: 'last',
      },
      '.prev': {
        gridArea: 'prev',
      },
      '.next': {
        gridArea: 'next',
      },
      '.page-count': {
        gridArea: 'pageCount',
        textAlign: 'right',
      },
      '.items-count': {
        gridArea: 'itemsCount',
        textAlign: 'right',
      },
      '.pages': {
        borderTop: theme('borderWidth.2'),
        borderStyle: 'solid',
        marginTop: `-${theme('borderWidth.2')}`,
        gridArea: 'pages',
        display: 'flex',
        width: 'auto',
        justifyContent: 'center',

        '*': {
          width: theme('spacing.12'),
        },
      },
      '& button': {
        display: 'inline-block',
        height: '100%',
        borderTop: theme('borderWidth.2'),
        borderStyle: 'solid',
        borderColor: `transparent`,
        marginTop: `-${theme('borderWidth.2')}`,
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        transitionProperty: 'all',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: 1.25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:disabled': {
          opacity: 0.5,
          pointerEvents: 'none',
        },
      },
    },
    ...Object.entries(theme('colors'))
      .map(([color, variants]) => ({
        [`.pagination-${color}`]: {
          color: `${variants['600']}`,
          borderColor: `${variants['100']}`,
          '& .pages': {
            borderColor: `${variants['100']}`,
          },
          '& button': {
            borderColor: `${variants['100']}`,
          },
          '& button.active': {
            borderColor: `${variants['600']}`,
          },
          '& button:hover': {
            borderColor: `${variants['800']}`,
            color: `${variants['800']}`,
          },
        },
      }))
      .reduce((a, b) => Object.assign(a, b), {}),
  }
  const mediaQuery = {
    [`@media (min-width: ${theme('screens.md')})`]: {
      '.pagination': {
        gridTemplateColumns: 'auto auto 1fr auto auto auto auto',
        gridTemplateRows: theme('spacing.6'),
        gridTemplateAreas: '"first prev pages next last itemsCount pageCount"',
      },
    },
  }
  addComponents([pagination, mediaQuery])
})
