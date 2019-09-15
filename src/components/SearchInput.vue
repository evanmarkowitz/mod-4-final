<template>
  <div id="searchInput">
    <input v-model="query">
    <button v-on:click="fetchCurrentQuery('hi')">Find Images</button>
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
      fetchCurrentQuery: function (query) {
        console.log('hi')
        const url = buildUrl(query)
        try{
          let response = fetchImages(url)
          console.log(response)
        } catch(error) {
          console.log(error)
        }
      }, 
    }
  }
</script>

<style>

</style>