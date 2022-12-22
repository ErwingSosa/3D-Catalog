<script>
  import ModelDetails from "../Models/ModelDetails.svelte";
  import ModelList from "../Models/ModelList/ModelList.svelte";
  import Globals from "../Shared/Globals.svelte";
  import MainMenu from "../Shared/MainMenu.svelte";
  import Navbar from "../Shared/Navbar.svelte";
</script>

<Navbar />

<MainMenu />

<div class="container p-3">
  <ModelList />
</div>
<ModelDetails />

<Globals />
