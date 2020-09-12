import { Badge } from '../src/index'
import BadgeWithIcon from './BadgeWithIcon'
export default {
  title: 'Badge',
  Component: Badge,
  argTypes: {
    BadgeText: {
      type: 'string',
      control: 'text',
    },
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
    iconPosition: {
      type: 'string',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
}

export const Text = (args) => ({
  Component: Badge,
  props: args,
})
export const TextWithIcon = (args) => ({
  Component: BadgeWithIcon,
  props: {
    ...args,
  },
})
