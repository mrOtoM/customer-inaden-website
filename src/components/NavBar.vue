<template>
  <div class="container">
    <div class="navbar">
      <nav>
        <router-link to="/"
          ><img src="@/assets/img/inadenLOGO.png" alt=""
        /></router-link>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  margin: 0;
  padding: 1.5rem 1rem;
  background: #fff;
}

nav {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  background: transparent;
  color: #333;
  font-weight: 500;
  font-size: 1.7rem;
}

a:hover,
a:active,
a.router-link-active {
  color: var(--blue);
}

nav img {
  max-height: 3.3rem;
  margin-top: 3px;
}

nav img:hover {
  opacity: 0.8;
}
</style>
