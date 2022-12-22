<script>
  import Breadcrumb from "./Breadcrumb/Breadcrumb.svelte";
  import MainMenuTools from "./MainMenuTools.svelte";
</script>

<div class="container p-3 border-bottom main-menu bg-white">
  <Breadcrumb />
  <MainMenuTools />
</div>

<style>
  .main-menu {
    position: sticky;
    top: 60px;
    z-index: 10;
  }
</style>
