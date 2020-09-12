import { action } from '@storybook/addon-actions'
import { i18n, Pagination } from '../src/index'
export default {
  title: 'Pagination',
  Component: Pagination,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'select',
        options: [
          'cyan',
          'grey',
          'teal',
          'pink',
          'red',
          'warmGrey',
          'yellow',
          'blue',
        ],
      },
    },
    totalItems: {
      default: 50,
      type: 'number',
      control: {
        type: 'number',
        step: 10,
      },
    },
    maxPages: {
      type: 'number',
      control: {
        type: 'number',
        step: 3,
        min: 3,
        max: 15,
      },
    },
    locale: {
      type: 'string',
      control: {
        type: 'select',
        options: ['en', 'es'],
      },
    },
  },
}
export const Paginator = (args) => {
  const { locale, ...props } = args
  i18n.locale = locale
  return {
    Component: Pagination,
    props: { ...props, itemsCount: [10, 20, 50] },
    on: {
      pageChange: action(`current page change`),
      itemsCountChange: action(`items per page change`),
    },
  }
}
