<template>
  <div class="m-2 p-2">
    <a href="" class="d-block image-slide">
      <img :src="`${data.image}`" class="" />
    </a>
    <div class="content-item">
      <h4 class="mb-2">
        <a href="">{{ data.name }}</a>
      </h4>
      <span> {{ data.location }} </span>
      <ul>
        <li>
          <i class="fa fa-bed me-2"></i>
          <span>{{ data.bedrooms }}</span>
        </li>
        <li>
          <i class="fa fa-bed me-2"></i>
          <span
            >{{ data.adult > 1 ? data.adult : 0 }} Adults,
            {{ data.children > 0 ? data.children : 0 }} Children</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideItem2",
  props: ["data"],
  mounted() {
    console.log(this.data);
  },
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

.content-item {
  font-family: "FS Siena", sans-serif;
  margin: 2rem 0;
  text-align: left;
}

.content-item ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.content-item h4 {
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
  color: #231f20;
  letter-spacing: 0.02em;
}
</style>