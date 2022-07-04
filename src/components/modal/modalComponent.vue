<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header position-relative border-0">
          <button
            type="button"
            class="
              btn btn-primary
              rounded-circle
              position-absolute
              top-0
              start-100
              translate-middle
              bg-primary
              text-white
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
        <div class="modal-body px-3 pt-0">
          <form action="">
            <div class="mb-2">
              <label for="">Location</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Choose</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-2">
              <label for="">Number of Bedrooms</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Choose</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal-content {
  border-radius: 20px;
}
label {
  font-size: 14px;
}
.form-select {
  font-size: 14px;
  padding: 10px;
}
</style>