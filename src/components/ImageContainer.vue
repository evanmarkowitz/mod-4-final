<template>
  <section class='columns'>
    <img v-for="image in data" :src="image" :alt="alt" class='image'/>
  </section>
</template>

<script>
export default {
  name: "ImageContainer",
  props: {
    data: Array
  }
}

</script>

<style>

.columns{
  box-sizing: border-box;
  padding: 1rem;
  columns: 5 250px;
  column-gap: 1rem;
}

.image{

  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
}

</style>