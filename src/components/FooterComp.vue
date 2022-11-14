<template>
  <footer>
    <div class="footer">
      <div class="box-container">
        <div class="box">
          <h3>Prčo si vybrať práve nás?</h3>
          <p>
            Máme mnohoročné skúsenosti s obore. Individuálny prístup. Riešenia
            šité na mieru
          </p>
        </div>

        <div class="box">
          <h3>Kde nás najdete</h3>
          <p>INADEN s.r.o.</p>
          <p>Osloboditeľov 829</p>
          <p>Čachtice 916 21</p>
          <br />
          <P>Mobil: 0917 755 031</P>
          <p>Emial: inadenzamocnictvo@gmail.com</p>
        </div>

        <div class="box">
          <h3>Rýchle odkazy</h3>
          <a href="#">Domov</a>
          <a href="#">O firme</a>
          <a href="#">Služby</a>
          <a href="#">Fotogaléria</a>
          <a href="#">Kontakt</a>
        </div>
      </div>

      <h1 class="credit">Copyright © 2022 INADEN s.r.o. – Kovovýroba.</h1>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: var(--blue);
}

.footer .box-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding-bottom: 5rem;
}

.footer .box-container .box {
  margin: 2rem;
  flex: 1 1 25rem;
}

.footer .box-container .box h3 {
  padding-bottom: 1rem;
  font-size: 2.5rem;
  color: #fff;
}

.footer .box-container .box p {
  font-size: 1.5rem;
  color: #eee;
  line-height: 1.8;
}

.footer .box-container .box a {
  font-size: 1.5rem;
  color: #eee;
  display: block;
  padding: 0.6rem 0;
}

.footer a:hover {
  text-decoration: underline;
}

.footer .credit {
  font-size: 1.7rem;
  color: #333;
  background: #f0f0f0;
  text-align: center;
  padding: 2rem 1rem;
  font-weight: normal;
}
</style>
