<script>
  import List from "../../Shared/List.svelte";
  import ModelCard from "../ModelCard.svelte";

  const list = [
    {
      name: "Op 200",
      model: "Op 200/21ALG22MRT-012.glb",
      image: "Op 200/Contenedor de Scrap.jpg",
      resources: "Op 200/Op 200.zip",
    },
    {
      name: "Op 400",
      model: "Op 400/Contenedor Scrap.glb",
      image: "Op 400/Contenedor Scrap.jpg",
      resources: "Op 400/Op 400.zip",
    },
  ];
</script>

<List>
  {#each list as model}
    <ModelCard {model} />
  {/each}
</List>
