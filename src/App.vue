<template>
  <nav-bar></nav-bar>
  <!-- <router-view /> -->
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  transition: all 0.2s linear;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  font-size: 67.5%;
}

:root {
  --blue: #343a90;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* --------- media queries ---------- */
</style>
