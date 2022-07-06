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
    <section class="destination">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 p-0">
            <img src="@/assets/img/Bali.jpg" alt="" />
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