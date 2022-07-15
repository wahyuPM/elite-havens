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
          <div class="col-md-4 ps-0">
            <div class="accordion accordion-flush" id="accordionExample">
              <div class="accordion-item bg-transparent border-0">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed bg-transparent ps-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Bali
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse ps-0"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0">
                    On the island of the gods, where heaven meets earth, the
                    phrase 'holiday in paradise' truly comes to life. Whether
                    you are looking for a beachside escape in Canggu, a clifftop
                    retreat in Jimbaran, or a scenic hideaway in the hills of
                    Ubud, you are in for a memorable time away in our carefully
                    crafted villas in Bali.
                  </div>
                  <div class="accordion-footer text-start">
                    <button class="btn btn-primary rounded-pill">
                      Start your journy
                    </button>
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent border-0">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="
                      accordion-button
                      collapsed
                      bg-transparent
                      border-0
                      ps-0
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Lombok
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0">
                    While not as famous as neighbouring Bali, Lombok is a
                    paradise of unsurpassed natural beauty; from the
                    coral-fringed Gili islands, home to sea turtles and exotic
                    fish, to vast white sand beaches, spectacular surf and
                    soaring volcanic peaks. Come find space to reconnect with
                    yourself and loved ones in one of our beautifully designed
                    Lombok villas.
                  </div>
                  <div class="accordion-footer text-start">
                    <button class="btn btn-primary rounded-pill">
                      Start your journy
                    </button>
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
    <section class="delights">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0 tagline py-5">
            <h2 class="mb-4">BE INSPIRED</h2>
            <p class="w-50 m-auto">
              Feel cocooned in some of the most beautiful places in the world
              and let us wrap our service around you.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <SlideShow />
          </div>
        </div>
      </div>
    </section>
    <section class="difference">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12 tagline">
            <h2 class="mb-4">THE ELITE HAVENS DIFFERENCE</h2>
            <button class="btn btn-primary rounded-pill">
              See what makes us different
            </button>
          </div>
        </div>
        <div class="row py-5 my-2">
          <div class="col-md-3 px-4 text-center border-start">
            <h5 class="py-4">Dining</h5>
            <p>
              Delicious food is central to a memorable holiday. Each meal at an
              elite haven is prepared from scratch and cooked to your taste by a
              private chef, using only the freshest of ingredients.
            </p>
          </div>
          <div class="col-md-3 px-4 text-center border-start">
            <h5 class="py-4">Personal Concierge</h5>
            <p>
              Delicious food is central to a memorable holiday. Each meal at an
              elite haven is prepared from scratch and cooked to your taste by a
              private chef, using only the freshest of ingredients.
            </p>
          </div>
          <div class="col-md-3 px-4 text-center border-start">
            <h5 class="py-4">Local</h5>
            <p>
              Delicious food is central to a memorable holiday. Each meal at an
              elite haven is prepared from scratch and cooked to your taste by a
              private chef, using only the freshest of ingredients.
            </p>
          </div>
          <div class="col-md-3 px-4 text-center border-start border-end">
            <h5 class="py-4">Book Direct</h5>
            <p>
              Delicious food is central to a memorable holiday. Each meal at an
              elite haven is prepared from scratch and cooked to your taste by a
              private chef, using only the freshest of ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="signature py-5">
      <div class="container-fluid signature-bg">
        <div class="signature-content">
          <h2>SIGNATURE COLLECTION</h2>
          <h6 class="mb-4">LUXURY AT ITS FINEST</h6>
          <div class="py-4">
            <p>
              Our Signature villas and chalets offer enhanced luxury at every
              level. <br /><br />
              Each tiny detail is taken care of, and small personal touches are
              sure to delight such as bespoke activities or fine dining with
              panoramic views.
            </p>
          </div>
          <button class="btn btn-primary rounded-pill">
            Explore our Signature Collection
          </button>
        </div>
      </div>
    </section>
    <section class="hand-picked">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0 tagline py-5 my-5">
            <h2 class="mb-4">HAND-PICKED BY ELITE HAVENS</h2>
            <p class="w-50 m-auto">See all our villas</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <SlideShow2 />
          </div>
        </div>
      </div>
    </section>
    <section class="subscribe my-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 p-0 tagline my-5 py-5">
            <h3 class="mb-4">
              EXTRAORDINARY EXPERIENCES, RIGHT TO YOUR INBOX.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6"></div>
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
import SlideShow from "@/components/slideShow/SlideShowComponent.vue";
import SlideShow2 from "@/components/slideShow2/SlideShowComponent.vue";
export default {
  components: {
    Hero,
    Modal,
    SlideShow,
    SlideShow2,
  },
};
</script>