<script>
  import classnames from "../utils/classnames"
  export let buttonText = "Button"
  export let color = "cyan"
  /**
   * @type {'default'|'secondary'|'ghost'}
   */
  export let variant = "default"
  export let href
  const classes = classnames("btn", `btn-${variant}-${color}`)
</script>

{#if href}
  <a {href} class={classes} {...$$props}>{buttonText}</a>
{:else}<button class={classes} on:click {...$$props}>{buttonText}</button>{/if}
