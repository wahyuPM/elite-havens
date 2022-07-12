<template>
  <carousel
    :stagePadding="100"
    :dots="false"
    :items="2"
    :autoplay="true"
    :loop="true"
  >
    <div v-for="(row, index) in items" :key="index">
      <SlideItem :src="row.src" :alt="row.alt" />
    </div>
  </carousel>
</template>

<script>
import SlideItem from "./slideItem/SlideItem.vue";
import carousel from "vue-owl-carousel";
export default {
  name: "SlideShow",
  components: { carousel, SlideItem },
  data() {
    return {
      items: [
        {
          src: "https://cimages.elitehavens.com/images/portals/rebrand/be-inspired/Culinary-delights.jpg",
          alt: "Slide 1",
        },
        {
          src: "https://cimages.elitehavens.com/images/portals/rebrand/be-inspired/Wellness.jpg",
          alt: "Slide 2",
        },
      ],
    };
  },
};
</script>