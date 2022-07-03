<template>
  <section class="hero position-relative overflow-hidden">
    <carousel
      :nav="false"
      :dots="false"
      :items="1"
      :autoplay="true"
      :loop="true"
      :pullDrag="false"
      :touchDrag="false"
      :mouseDrag="false"
    >
      <img src="@/assets/img/hero1.jpg" />

      <img src="@/assets/img/hero2.jpg" />

      <img src="@/assets/img/hero3.jpg" />
    </carousel>
    <div class="hero-title">
      <h1>
        LIFE.<br />
        MADE OF MOMENTS LIKE THIS.
      </h1>
      <button
        @click="openModal()"
        type="button"
        class="btn btn-primary rounded-pill px-5 py-3 hero__btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa fa-search me-2"></i>
        Find your ideal haven
      </button>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";
import $ from "jquery";
export default {
  components: { carousel },
  methods: {
    openModal() {
      $("#exampleModal").appendTo("body");
      $("#exampleModal").modal("show");
    },
  },
};
</script>