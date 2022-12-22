<script>
  import { showDetails } from "./ModelStore";
  import Image from "../Shared/Image.svelte";
  export let model = {
    name: "Op 200",
    model: "Op 200/21ALG22MRT-012.glb",
    image: "Op 200/Contenedor de Scrap.jpg",
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card">
  <Image
    url={model.image}
    on:click={() => {
      showDetails(model);
    }}
  />
  <div class="card-body">
    <h5>{model.name}</h5>
    <p>Descripción</p>
  </div>
</div>
