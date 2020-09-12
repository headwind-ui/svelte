<script>
  import Icon from "./Icon.svelte"
  import { slide } from "svelte/transition"
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
  import classnames from "../utils/classnames"
  export let buttonClass = ""
  export let iconClass = "w-3 ml-1"
  export let disabled = false
  export let menuClass = ""
  /**
   * @type {'left'|'right'}
   */
  export let position = "left"
  export let open = false
  export let title = null
  export let icon = faChevronDown
  export let animateIcon = true
  export let close = () => {
    open = false
  }

  let buttonElement
  let menuElement

  let handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      close()
    }
  }

  let handleWindowClick = (event) => {
    const path = event.path || event.composedPath()
    if (path.includes(buttonElement)) {
      return
    }
    if (path.includes(menuElement)) {
      close()
    }
    close()
  }
  $: showMenu = !!open
</script>

<svelte:options accessors />
<svelte:window on:click={handleWindowClick} on:keydown={handleKeyDown} />

<div
  class={classnames('relative inline-block overflow-visible z-50', $$props.class)}
  {title}>
  <button
    type="button"
    bind:this={buttonElement}
    class={classnames('focus:outline-none whitespace-no-wrap flex items-center justify-between overflow-hidden', buttonClass)}
    {disabled}
    on:click={() => (open = !open)}>
    <slot name="button" />
    <Icon
      {icon}
      class={classnames(
        'transition-transform ease-in duration-300 transform',
        iconClass,
        { '-rotate-180': animateIcon && open },
      )} />
  </button>

  {#if showMenu}
    <div
      bind:this={menuElement}
      class={classnames(
        'w-32 py-1 z-40 absolute m-1 bg-white shadow-md overflow-visible rounded',
        menuClass,
        { 'left-0': position === 'left', 'right-0': position === 'right' },
      )}
      transition:slide>
      <slot name="menu" />
    </div>
  {/if}
  <slot />
</div>
