<template>
  <div id="searchInput">
    <input v-model="query">
    <button v-on:click="fetchCurrentQuery(query)">Find Images</button>
  </div>
</template>
<script>
  // const fetchImages = require("../../apiCalls/apiCalls");
  import fetchImages from "../../apiCalls/apiCalls"
  const buildUrl = (searchQuery) => {
    return `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}`
  }
  export default {
    name: 'SearchInput',
    data () {
      return {
        query: 'hi'
      }
  },
    methods: {
      fetchCurrentQuery: async function (query) {
        const url = await buildUrl(query)
        try{
          let response = await fetchImages(url)
          await console.log(response)
        } catch(error) {
          await console.log(error)
        }
      }, 
    }
  }
</script>

<style>

</style>