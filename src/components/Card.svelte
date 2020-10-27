<script>
  import { classnames } from '../utils'

  $: classes = classnames('card', $$props.class)
</script>

<div class={classes} on:click>
  <div class="card-preview">
    <slot name="preview" />
  </div>
  <div class="card-body">
    <slot name="title" />
    <div class="card-content">
      <slot />
    </div>
    <div class="card-actions">
      <slot name="actions" />
    </div>
  </div>
</div>
