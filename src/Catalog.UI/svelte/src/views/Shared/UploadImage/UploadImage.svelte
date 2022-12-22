<script>
  import { state, changeImage, upload } from "./UploadImage";
</script>

<div class="input-group mb-3">
  {#if $state.src}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={$state.src} alt="default" class="mb-4" />
  {/if}

  <label
    class="input-group-text w-100 d-flex align-items-center justify-content-between rounded pointer"
    for="uploadImageInput"
  >
    Cargar imagen
    <i class="fa-solid fa-upload" />
  </label>
  <input
    type="file"
    class="form-control d-none"
    id="uploadImageInput"
    on:change={changeImage}
  />
</div>

<style>
  img {
    width: 100%;
    height: 100px;
    object-fit: scale-down;
  }
</style>
