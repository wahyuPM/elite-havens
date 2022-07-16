<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/HeaderComponent.vue";
import Footer from "../../components/FooterComponent.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>