<template>
  <div class="m-2">
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
  display: block;
  overflow: hidden;
}
.image-slide img {
  width: 100% !important;
  height: 28rem !important;
  object-fit: cover;
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