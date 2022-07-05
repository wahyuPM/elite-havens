<template>
  <div>
    <Hero />
    <section class="elite">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex justify-content-center">
            <div class="elite-content">
              <h3>
                HAVENS AREN’T PLACES TO SHELTER FROM THE WORLD. THEY’RE PLACES
                TO EMBRACE IT.
              </h3>
              <p class="mb-4">
                Across a meticulously-curated global portfolio of close to 300
                private sanctuaries, we transcend beauty to offer tailored
                personal service and unparalleled experiences that set the
                standard
              </p>
              <a href="#" class="btn btn-primary elite__btn rounded-pill">
                See what makes us different
              </a>
            </div>
          </div>
          <div class="col-md-6 border-left">
            <div class="elite-img ps-4">
              <img src="@/assets/img/elite.jpg" alt="elite-hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tagline">
      <div class="container tagline-content">
        <div class="row">
          <div class="col-12">
            <h2>Your journey to total freedom starts here</h2>
          </div>
        </div>
      </div>
    </section>
    <div class="demo-page"></div>
    <Modal />
  </div>
</template>

<script>
import Hero from "../../components/hero/HeroComponent.vue";
import Modal from "../../components/modal/modalComponent.vue";
export default {
  components: {
    Hero,
    Modal,
  },
};
</script>