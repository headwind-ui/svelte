<script>
  import classnames from '../utils/classnames'
  export let BadgeText = 'badge'
  export let color = 'cyan'
  /**
   * @type {'left'|'right'}
   */
  export let iconPosition = ''
  const classesContainer = classnames('badge', `badge-${color}`, $$props.class)
  const classesBadge = classnames({
    'flex-row': iconPosition == 'left',
    'flex-row-reverse': iconPosition == 'right',
  })
</script>

<div class={classesContainer}>
  <span class={classesBadge}>
    <slot name="value" />

    {BadgeText}
  </span>
</div>
