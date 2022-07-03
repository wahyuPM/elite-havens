<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "../../components/HeaderComponent.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
};
</script>