<template>
  <div>
    <Hero />
    <section class="elite">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="elite-content w-75">
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
              <a href="#" class="btn btn-primary rounded-pill">
                See what makes us different
              </a>
            </div>
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