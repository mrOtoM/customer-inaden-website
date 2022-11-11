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

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 768px) {
  #menu {
    display: block;
  }

  header .navbar {
    position: fixed;
    top: 6.5rem;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 0.2rem solid rgba(0, 0, 0, 0.1);
    /* transform: scaleY(0); */
    /* transform-origin: top; */
    /* opacity: 0; */
  }

  header .navbar ul {
    flex-flow: column;
    padding: 2rem 0;
  }

  header .navbar ul li {
    text-align: center;
    width: 100%;
    margin: 1rem 0;
  }
  header .navbar ul li a {
    font-size: 2.5rem;
    /* display: block; */
  }
}
</style>
