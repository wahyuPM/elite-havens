<template>
  <div class="p-2">
    <a href="" class="d-block">
      <img :src="`${src}`" :alt="`${alt}`" class="h-auto w-100" />
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