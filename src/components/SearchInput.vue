<template>
  <main>
    <div id="searchInput">
      <input v-model="query" id="query-input" />
      <p id="current-search">Current Search: {{ lastQuery }}</p>
      <button v-on:click="fetchCurrentQuery(query)" id="query-button">
        Find Images
      </button>
      {{ error }}
    </div>
    <ImageContainer v-bind:data="data"/>
    <button v-on:click="hitNext(-1)">Previous</button>
    <button v-on:click="hitNext(1)">Next</button>
  </main>
</template>

<script>
const fetchImages = require("../../apiCalls/apiCalls");
import ImageContainer from './ImageContainer'

const buildUrl = (pageNum, searchQuery) => {
  return `https://api.unsplash.com/search/photos?page=${pageNum}&query=${searchQuery}`;
};

export default {
  name: "SearchInput",
  components: {
    ImageContainer
  },
  data() {
    return {
      query: "",
      lastQuery: "",
      data: [],
      error: "",
      pageNum: 1
    };
  },
  methods: {
    fetchCurrentQuery: async function(query) {
      const url = await buildUrl(this.pageNum, query);
      try {
        let response = await fetchImages(url);
        let urlArray = response.results.map(img => img.urls.regular);
        this.data = urlArray;
        this.lastQuery = this.query;
        this.query = "";
      } catch (error) {
        this.error = error.message;
      }
    },
    hitNext: async function(number) {
      if (number > 0) {
        this.pageNum += 1
      } else if (number < 0 && this.pageNum !== 1) {
        this.pageNum -= 1
      }
      const url = await buildUrl(this.pageNum, this.lastQuery);
      let response = await fetchImages(url);
      let urlArray = response.results.map(img => img.urls.regular);
      this.data = urlArray;
    }
  },
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

#current-search {
  box-sizing: border-box;
  text-align: left;
  padding: 5px, 0, 5px, 10px;
  font-size: 1.5rem;
}
</style>


