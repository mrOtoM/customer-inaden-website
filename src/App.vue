<template>
  <nav-bar></nav-bar>
  <router-view> </router-view>
  <footerComp></footerComp>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Slider from './components/Slider.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: { NavBar, Slider, FooterComp },
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
  list-style: none;
  transition: all 0.2s linear;
}

:root {
  --blue: #343a90;
  --blue-light: #474c95;
  --white: rgb(255, 255, 255);
}

html {
  font-size: 67.5%;
}

section {
  padding-bottom: 10rem;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.btn {
  padding: 0.7rem 4rem;
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1.7rem;
  color: #999;
  border: 0.1rem solid #dee4ee;
}

.route__container {
  min-height: 70vh;
  margin-top: 10rem;
}

.btn:hover {
  background: #f0f0f0;
  color: var(--blue);
}

.heading {
  text-align: center;
  color: var(--blue);
  font-size: 3rem;
  font-weight: normal;
  margin: 3rem 0;
}

.description {
  font-size: 1.7rem;
  text-align: var(--blue);
  color: #999;
  width: 80rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 1rem;
  line-height: 1.5;
}

.scroll-top {
  position: fixed;
  right: 2rem;
  bottom: 7.5rem;
  z-index: 100;
  display: none;
}

.scroll-top img {
  height: 7rem;
}

/* --------- media queries ---------- */

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }

  .description {
    padding: 1rem;
    width: auto;
    font-size: 1.6rem;
  }

  .home .content .content__info {
    max-width: 70%;
  }
}

@media (max-width: 768px) {
  #menu-btn {
    display: block;
  }

  header .navbar {
    position: fixed;
    top: 6.5rem;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 0.2rem solid rgba(0, 0, 0, 0.1);
    /* clip-path: polygon(0 0, 100% 0, 100% 21%, 0 37%); */
  }
  /* 
  .active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  } */

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
  .home .content {
    padding: 0 3%;
    text-align: center;
  }
  .home .content .content__info {
    max-width: 100%;
  }
}
</style>
