<template>
  <div class="m-2">
    <a class="d-block image-slide">
      <img :src="`${data.image}`" class="" />
    </a>
    <div class="content-item"></div>
  </div>
</template>
<script>
export default {
  name: "SlideItem2",
  props: ["data"],
};
</script>

<style scoped>
.image-slide {
  display: block;
  overflow: hidden;
}
.image-slide img {
  width: 100% !important;
  height: auto !important;
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