<template>
  <div class="route__container">
    <h1 class="heading">Kontakt</h1>
    <p class="description">
      Ak vás zaujali naše služby, alebo sa vám páčia naše práce neváhajte nás
      kontaktovať telefonicky alebo e-mailom. Tešíme sa na spoluprácu.
    </p>

    <div class="box">
      <span>INADEN s.r.o.</span>
      <p>Osloboditeľov 829</p>
      <p>Čachtice 916 21</p>
      <br />
      <p>IČO: 47051302</p>
      <p>DIČ: 2023715045</p>
      <br />
      <P>Mobil: 0917 755 031</P>
      <p>Email: inadenzamocnictvo@gmail.com</p>
    </div>

    <div class="map">
      <iframe
        style="border: 0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.725399783188!2d17.788856915229218!3d48.710729319046926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471355e32e618353%3A0x8c6e4071eb0284d8!2sOslobodite%C4%BEov+829%2C+916+21+%C4%8Cachtice!5e0!3m2!1ssk!2ssk!4v1459677516945"
        width="800"
        height="400"
        frameborder="0"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  margin: 4rem;
}

.box span {
  margin-bottom: 1.3rem;
  font-size: 2rem;
  color: var(--blue);
  font-weight: 700;
}
.box p {
  font-size: 1.5rem;
  color: #eee;
  line-height: 1.8;
  color: #333;
}

.map {
  padding-bottom: 5rem;
}
</style>
