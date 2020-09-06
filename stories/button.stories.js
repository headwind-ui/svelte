import { action } from '@storybook/addon-actions'
import Button from '../src/index'

export default {
  title: 'Button',
  Component: Button,
  argTypes: {
    buttonText: {
      type: 'string',
      control: 'text',
    },
    variant: {
      type: 'string',
      control: {
        type: 'select',
        options: ['default', 'secondary', 'ghost'],
      },
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
  },
}

export const Text = (args) => ({
  Component: Button,
  props: args,
  on: { click: action('clicked') },
})
