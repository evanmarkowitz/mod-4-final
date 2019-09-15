<template>
  <div id="app">
    <section class='tag-line'>
      <img alt="Vue logo" src="./assets/logo.png" id="vue-logo" />
      <h2 id="headline">ue it</h2>
    </section>
    <SearchInput />
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";
// const SearchInput = require("./components/SearchInput");

export default {
  name: "app",
  components: {
    SearchInput
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tag-line {
  display: flex;
  justify-content: center;
}

#vue-logo {
  height: 100px;
}

#headline {
  margin-top: 40px;
  margin-left: -20px;
}
</style>
