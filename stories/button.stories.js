import { action } from '@storybook/addon-actions'
import { Button } from '../src/index'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
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
  Component: Button,
  props: args,
  on: { click: action('clicked') },
})
export const TextWithIcon = (args) => ({
  Component: Button,
  props: { ...args, icon: faPlusCircle },
  on: { click: action('clicked') },
})
