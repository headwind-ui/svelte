<script>
  import { Dropdown } from "../src/index"
  export let menu
</script>

<Dropdown
  buttonClass="text-grey-600 select-none"
  menuClass="mr-1 select-none"
  title="Dropdown">
  <span slot="button">Dropdown</span>
  <div slot="menu" class="text-grey-600">
    {#each menu as item}
      <button
        class="px-2 py-1 block w-full hover:text-cyan-600 text-sm"
        on:click={item.action}>
        {item.name}
      </button>
    {/each}
  </div>
</Dropdown>
