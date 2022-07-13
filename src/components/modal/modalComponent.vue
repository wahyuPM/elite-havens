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
            <div class="row mb-4">
              <div class="col-6">
                <label for="">Check In</label>
                <datetime
                  type="date"
                  value-type="format"
                  format="yyyy-MM-dd"
                  required
                ></datetime>
              </div>
              <div class="col-6">
                <label for="">Check Out</label>
                <datetime
                  type="date"
                  value-type="format"
                  format="yyyy-MM-dd"
                  required
                ></datetime>
              </div>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary rounded-pill">
                Find your ideal haven
              </button>
            </div>
          </form>
          <form action="">
            <div class="my-3">
              <label for="">Or search by property name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Type name and press enter"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
export default {
  components: {
    datetime: Datetime,
  },
};
</script>

<style lang="css" scoped>
.modal-content {
  border-radius: 20px;
  font-size: 14px;
}
.modal-content .modal-body .btn-primary {
  padding: 10px;
}
.modal-content .modal-header .btn-primary {
  padding: 5px 10px;
}
.form-select,
.form-control {
  font-size: 14px;
  padding: 10px;
}
.vdatetime >>> input.vdatetime-input {
  width: 100%;
  border-radius: 40px;
  border: 1px solid #ced4da;
  padding: 5px;
  text-align: center;
}
</style>