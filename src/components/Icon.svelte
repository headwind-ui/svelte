<script>
  import classnames from "../utils/classnames"

  export let icon
  let path = ""
  let classes = ""
  let viewBox = ""
  $: viewBox = icon && `0 0 ${icon.icon[0] || 0} ${icon.icon[1] || 0}`
  $: classes = classnames($$props.class, "icon")
  $: path = icon && icon.icon[4]
</script>

<svg
  aria-hidden="true"
  class={classes}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <path fill="currentColor" d={path} />
</svg>
