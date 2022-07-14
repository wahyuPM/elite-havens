<template>
  <carousel
    :stagePadding="100"
    :items="2"
    :autoplay="true"
    :loop="true"
    :dots="false"
    v-if="property_list.length > 0"
  >
    <div
      class="border-start"
      v-for="(row, index) in property_list"
      :key="index"
    >
      <SlideItem :data="row" />
    </div>
  </carousel>
</template>

<script>
import SlideItem from "./slideItem/SlideItem.vue";
import carousel from "vue-owl-carousel";
export default {
  name: "SlideShow2",
  components: { carousel, SlideItem },
  data() {
    return {
      property_list: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      try {
        const response = await this.$http.get(
          `${this.$api_url}/property?limit=5`
        );
        if (response) {
          this.property_list = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>