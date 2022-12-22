<script>
  import FolderCreateModal from "./ModelCreateModal.svelte";
</script>

<FolderCreateModal>
  <div class="mb-3">
    <label for="name" class="form-label">Nombre</label>
    <input
      type="name"
      class="form-control"
      id="name"
      placeholder="Ingrese un nombre"
    />
  </div>
</FolderCreateModal>
