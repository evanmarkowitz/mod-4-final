<template>
  <div id="app">
    <h2 id="headline">vue it</h2>
    <img alt="Vue logo" src="./assets/logo.png" id="vue-logo" />
    <SearchInput />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SearchInput from "./components/SearchInput";

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
  /* margin-top: 0px; */
}

#vue-logo {
  width: 10%;
}

#headline {
  margin-top: 10px;
}
</style>
