import { action } from '@storybook/addon-actions'
import Dropdown from './Dropdown'
export default {
  title: 'Dropdown',
  Component: Dropdown,
}
export const TextWithIcon = (args) => ({
  Component: Dropdown,
  props: {
    menu: [
      { name: 'action 1', action: action('click on action 1') },
      { name: 'action 2', action: action('click on action 2') },
      { name: 'action 3', action: action('click on action 3') },
    ],
  },
})
