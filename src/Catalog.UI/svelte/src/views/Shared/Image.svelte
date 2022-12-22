<script>
  export let url =
    "https://th.bing.com/th/id/OIP.2ahHJOTuTeDMztLcx5t_7gHaEO?pid=ImgDet&rs=1";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
  src="/models/{url}"
  alt=""
  data-bs-toggle="modal"
  data-bs-target="#modelDetails"
  on:click
/>

<style>
  img {
    width: 100%;
    object-fit: contain;
  }
</style>
