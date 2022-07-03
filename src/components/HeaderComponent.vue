<template>
  <header
    class="w-100 position-fixed top-0 start-0 px-4 bg-tranparent text-black"
    :class="{ onScroll: !view.topOfPage }"
  >
    <div class="container-fluid py-5">
      <div class="position-absolute start-50 top-50 translate-middle">
        <a href="/"
          ><img
            class="w-70"
            src="https://cimages.elitehavens.com/images/portals/rebrand/eh-logo.svg"
          />
        </a>
      </div>
      <nav class="menu">
        <ul class="menu-main">
          <!-- Nav Menu Left -->
          <div class="col d-flex w-auto">
            <li class="mx-2">
              <a href="#"
                >Villas
                <span class="mobile-icon"><i class="fa fa-angle-down"></i></span
              ></a>
            </li>
            <li class="mx-2">
              <a href="#"
                >Experiences
                <span class="mobile-icon"><i class="fa fa-angle-down"></i></span
              ></a>
            </li>
          </div>
          <div class="w-100"></div>
          <!-- Nav Menu Right -->
          <div class="col d-flex w-auto">
            <li>
              <a href="#"
                >Events
                <span class="mobile-icon"><i class="fa fa-angle-down"></i></span
              ></a>
            </li>
            <li>
              <a href="#"
                >Promotions
                <span class="mobile-icon"><i class="fa fa-angle-down"></i></span
              ></a>
            </li>
            <li>
              <a href="#" class="px-2">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#" class="px-2">
                <i class="fa fa-heart"></i>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>