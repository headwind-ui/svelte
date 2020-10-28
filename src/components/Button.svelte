<script>
  import classnames from '../utils/classnames'
  import Icon from './Icon.svelte'
  export let buttonText = 'Button'
  export let color = 'cyan'
  export let icon = null
  /**
   * @type {'left'|'right'}
   */
  export let iconPosition = null
  /**
   * @type {'default'|'secondary'|'ghost'}
   */
  export let variant = 'default'
  export let href = null
  let { class: classNames, ...props } = $$props
  const classes = classnames('btn', classNames, {
    [`btn-${variant}-${color}`]: !!buttonText,
    [`btn-icon-only-${color}`]: !!(!buttonText && icon),
    'flex items-center': !!(buttonText && icon),
    'flex-row': iconPosition == 'left',
    'flex-row-reverse': iconPosition == 'right',
  })
</script>

{#if href}
  <a {href} class={classes} {...props}>
    {#if icon}
      <Icon
        {icon}
        class={iconPosition && iconPosition == 'right' ? 'ml-2' : 'mr-2'} />
    {/if}
    <span>{buttonText}</span></a>
{:else}
  <button class={classes} on:click {...props}>{#if icon}
      <Icon
        class={iconPosition && iconPosition == 'right' ? 'ml-2' : 'mr-2'}
        {icon} />
    {/if}
    <span>{buttonText}</span></button>
{/if}
