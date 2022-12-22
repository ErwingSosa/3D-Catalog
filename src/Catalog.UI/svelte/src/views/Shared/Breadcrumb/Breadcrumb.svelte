<script>
  import { state } from "./Breadcrumb";
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    {#each $state.list as link}
      <li class="breadcrumb-item"><a href="/">{link}</a></li>
    {/each}
  </ol>
</nav>
