<template>
  <div>
    <Hero />
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