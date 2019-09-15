<template>
  <div id="searchInput">
    <input v-model="query" id="query-input" />
    <p id="current-search">Current Search: {{ lastQuery }}</p>
    <button v-on:click="fetchCurrentQuery(query)" id="query-button">
      Find Images
    </button>
    {{error}}
  </div>
</template>

<script>
// const fetchImages = require("../../apiCalls/apiCalls");
import fetchImages from "../../apiCalls/apiCalls";
const buildUrl = searchQuery => {
  return `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}`;
};
export default {
  name: "SearchInput",
  data() {
    return {
      query: "",
      lastQuery: "",
      data: [],
      error: ""
    };
  },
  methods: {
    fetchCurrentQuery: async function(query) {
      const url = await buildUrl(query);
      try {
        let response = await fetchImages(url);
        let urlArray = response.results.map(img => img.urls.regular);
        this.data = urlArray;
        this.lastQuery = this.query;
        this.query = "";
      } catch (error) {
        this.error = error.message
      }
    }
  }
};
</script>

<style>
  #searchInput {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
  }
  #query-button,
  #query-input {
    height: 2rem;
    font-size: 1.5rem;
    margin: 5px;
  }

  #current-search{
    box-sizing: border-box;
    text-align: left;
    padding: 5px, 0, 5px, 10px;
    font-size: 1.5rem;
  }
</style>
