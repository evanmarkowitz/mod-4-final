<template>
  <div id="searchInput">
    <input v-model="query">
    {{lastQuery}}
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
        query: 'hi',
        lastQuery: '',
        data: []
      }
  },
    methods: {
      fetchCurrentQuery: async function (query) {
        const url = await buildUrl(query)
        try{
          let response = await fetchImages(url)
          let urlArray = response.results.map(img => img.urls.regular)
          this.data = urlArray
          this.lastQuery = this.query
          this.query = ''
        } catch(error) {
          await console.log(error)
        }
      }, 
    }
  }
</script>

<style>

</style>