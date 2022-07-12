<template>
  <div class="p-2 m-auto">
    <a href="" class="d-block image-slide">
      <img :src="`${src}`" :alt="`${alt}`" class="" />
    </a>
    <a href="" class="d-block mt-5"> <h4>Culinary delight</h4> </a>
  </div>
</template>
<script>
export default {
  name: "SlideItem",
  props: ["src", "alt"],
};
</script>

<style scoped>
.image-slide {
  width: 100% !important;
  height: 30rem !important;
  display: block;
  overflow: hidden;
}
.image-slide img {
  height: max-content !important;
  width: 100% !important;
  object-fit: cover;
  object-position: center;
}

a {
  text-decoration: none;
}

h4 {
  font-family: "FS Siena", sans-serif;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  color: #231f20;
  letter-spacing: 0.02em;
  text-align: center;
}
</style>