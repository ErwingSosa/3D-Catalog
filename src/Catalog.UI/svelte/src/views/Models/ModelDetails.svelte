<script>
  import ModelViewer from "../Shared/ModelViewer.svelte";
  import { state } from "./ModelStore";
</script>

<!-- Modal -->
<div class="modal fade" id="modelDetails" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col">
            <ModelViewer src={$state.model.model} />
          </div>
          <div class="col-4 p-3">
            <div class="mb-3 border-bottom">
              <h5>{$state.model.name}</h5>
            </div>
            <div class="mb-3 border-bottom">
              <a href="/models/Op 200/Op 200.zip">{$state.model.name}.zip</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
