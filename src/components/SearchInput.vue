<template>
  <div id="searchInput">
    <input v-model="query">
    <button>Find Images</button>
  </div>
</template>
<script>
  export default {
    name: 'SearchInput',
    data () {
    return {
      query: 'hi'
    }
  }
  }
</script>

<style>

</style>