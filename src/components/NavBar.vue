<template>
  <header>
    <router-link to="/"
      ><img src="@/assets/img/inadenLOGO.png" alt=""
    /></router-link>
    <div id="menu-btn" class="fas fa-bars" @click="toggleBtn"></div>
    <transition name="fade" appear>
      <div class="navbar" :class="isOpen ? 'active' : 'hide'">
        <nav>
          <ul>
            <li>
              <router-link to="/">Úvod</router-link>
            </li>
            <li>
              <router-link to="/aboutcompany">O firme</router-link>
            </li>
            <li>
              <router-link to="/services">Služby</router-link>
            </li>
            <li>
              <router-link to="/photos">Fotogaléria</router-link>
            </li>
            <li>
              <router-link to="/contact">Kontakt</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleBtn() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 1.5rem 9%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;
}

header img {
  max-height: 3.3rem;
  margin-top: 3px;
}

header img:hover {
  opacity: 0.8;
}

#menu-btn {
  font-size: 3rem;
  color: #666;
  cursor: pointer;
  display: none;
}

header .navbar {
  background: #fff;
}

header .navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .navbar ul li {
  margin-left: 3rem;
}

header .navbar ul li a {
  text-decoration: none;
  background: transparent;
  color: #333;
  font-weight: 500;
  font-size: 1.7rem;
}

header .navbar ul li a:hover,
header .navbar ul li a:active,
header .navbar ul li a.router-link-active {
  color: var(--blue);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  header .navbar {
    position: fixed;
    top: 6.5rem;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 0.2rem solid rgba(0, 0, 0, 0.1);
    /* clip-path: polygon(0 0, 100% 0, 100% 21%, 0 37%); */
  }

  .hide {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  .active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
