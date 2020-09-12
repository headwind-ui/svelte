<script>
  import { createEventDispatcher } from "svelte"
  import { i18n } from "../utils"
  import Dropdown from "./Dropdown.svelte"
  export let color = "cyan"
  export let totalItems = 0
  export let itemsPerPage = 10
  export let itemsCount = []
  export let maxPages = 5
  export let currentPage = 1
  export let totalPages = 0

  const dispatch = createEventDispatcher()

  $: totalPages = Math.ceil(totalItems / itemsPerPage)
  $: min =
    currentPage <= totalPages - Math.ceil(maxPages / 2)
      ? currentPage - Math.ceil(maxPages / 2) > 0
        ? currentPage - Math.ceil(maxPages / 2)
        : 0
      : totalPages - maxPages
  $: pages = [...Array(maxPages).keys()]
    .map((page) => page + 1 + min)
    .filter((page) => page > 0 && page <= totalPages)

  const next = () => {
    currentPage = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages
  }
  const prev = () => {
    currentPage = currentPage - 1 >= 0 ? currentPage - 1 : 1
  }
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      currentPage = page
    }
  }
  $: {
    dispatch("pageChange", { currentPage })
  }
  const updateItemsPerPage = (value) => {
    itemsPerPage = value
    goToPage(1)
    dispatch("itemsCountChange", { itemsPerPage })
  }
</script>

<div class="pagination {`pagination-${color}`}">
  <button
    class="first"
    on:click={() => {
      goToPage(1)
    }}
    disabled={currentPage === 1}>{i18n.translate('first')}</button>
  <button
    class="prev"
    on:click={prev}
    disabled={currentPage === 1}>{i18n.translate('previous')}</button>

  <div class="pages">
    {#each pages as page}
      <button
        class:active={page === currentPage}
        on:click={goToPage(page)}>{page}</button>
    {/each}
  </div>
  <button
    class="next"
    on:click={next}
    disabled={currentPage === totalPages}>{i18n.translate('next')}</button>
  <button
    class="last"
    on:click={() => {
      goToPage(totalPages)
    }}
    disabled={currentPage === totalPages}>{i18n.translate('last')}</button>
  <div class="page-count">
    <span class="inline-block w-12"> {currentPage} </span>
    {i18n.translate('of')}
    {i18n.translate('%n pages', { value: totalPages })} ({i18n.translate(
      '%n items',
      { value: totalItems },
    )})
  </div>
  <div class="items-count">
    {#if itemsCount.length > 0}
      <Dropdown position="right">
        <span
          slot="button">{i18n.translate('%n items per page', {
            value: itemsPerPage,
          })}</span>
        <div slot="menu" class="text-grey-600 bg-white z-50">
          {#each itemsCount as item}
            <button
              class={`px-2 py-1 block w-full hover:text-${color}-600 text-sm bg-white z-50`}
              on:click={() => {
                updateItemsPerPage(item)
              }}>
              {item}
            </button>
          {/each}
        </div>
      </Dropdown>
    {/if}
  </div>
</div>
