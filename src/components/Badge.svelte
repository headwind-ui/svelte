<script>
  import classnames from "../utils/classnames"
  export let BadgeText = "badge"
  export let color = "cyan"
  /**
   * @type {'left'|'right'}
   */
  export let iconPosition
  const classes = classnames("badge", `badge-${color}`, {
    "flex-row": iconPosition == "left",
    "flex-row-reverse": iconPosition == "right",
  })
</script>

<span class={classes}>
  <slot name="value" />

  {BadgeText}
</span>
