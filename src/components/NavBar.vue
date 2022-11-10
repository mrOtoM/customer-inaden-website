<template>
  <div class="navbar">
    <nav>
      <router-link to="/"
        ><img src="@/assets/img/inadenLOGO.png" alt=""
      /></router-link>
      <ul>
        <li>
          <router-link to="/">ÚVOD</router-link>
        </li>
        <li>
          <router-link to="/aboutcompany">O FIRME</router-link>
        </li>
        <li>
          <router-link to="/services">SLUŽBY</router-link>
        </li>
        <li>
          <router-link to="/photos">FOTOGALÉRIA</router-link>
        </li>
        <li>
          <router-link to="/contact">KONTAKT</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;
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
  columns: #333;
  font-weight: 500;
  font-size: 1.8rem;
}

a:hover,
a:active,
a.router-link-active {
  color: rgb(25, 44, 191);
}

nav img {
  max-height: 50px;
}
</style>
