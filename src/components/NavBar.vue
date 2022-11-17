<template>
  <header>
    <router-link to="/"
      ><img src="@/assets/img/inadenLOGO.png" alt=""
    /></router-link>
    <div id="menu-btn" class="fas fa-bars"></div>
    <div class="navbar">
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
  </header>
</template>

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

@media (max-width: 768px) {
  .active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
