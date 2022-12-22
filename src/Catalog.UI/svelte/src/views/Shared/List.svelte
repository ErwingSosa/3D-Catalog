<script>
  import { fade } from "svelte/transition";
  export let isFade = false;
</script>

{#if isFade}
  <div out:fade class="list pb-5 mt-4">
    <slot />
  </div>
{:else}
  <div class="list pb-5 mt-4">
    <slot />
  </div>
{/if}

<style>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    width: 100%;
    row-gap: 20px;
  }
</style>
