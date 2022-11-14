<template>
  <section class="service" id="service">
    <h1 class="heading">Naša ponuka a služby</h1>
    <p class="description">
      Sme strojárska firma s dlhoročnými skúsenosťami. Naším hlavným cieľom je
      vysoká kvalita odvedených prác s výberom moderných technologických
      postupov. Naše mnohoročné skúsenosti v odbore sú zárukou znalosti
      posledných postupov a poskytovania odborného poradenstva či konzultácií.
    </p>

    <div class="box-container">
      <div class="box">
        <i class="fa-solid fa-industry"></i>

        <h3>O FIRME</h3>
        <p>
          Naša rodinne založená firma vznikla v roku 1996 ako fyzická osoba pod
          názvom Jozef Brokeš – INADEN. V súčasnosti sme spoločnosť s názvom
          INADEN, s.r.o. Naša hlavná činnosť je zámočníctvo a kovovýroba. Máme
          dlhoročné skúsenosti a veľa spokojných zákazníkov v SR aj mimo nej.
        </p>
        <a href="#" class="btn">Čítať viac</a>
      </div>

      <div class="box">
        <i class="fa-sharp fa-solid fa-hammer"></i>
        <h3>SLUŽBY</h3>
        <p>
          Zaoberáme sa zákazkovou výrobou a montážou oceľových konštrukcií ako
          sú brány, ploty, zábradlia, schodiská, nábytok atď, ich servisom a
          opravami. Vyrábame železné, antikorové (nerezové) zábradlia aj s
          kombináciou skla alebo dreva, brány, ploty. Kované brány, ploty,
          zábradlia. Markízy a striešky z bezpečnostného skla, prístrešky.
          Realizujeme ...
        </p>
        <a href="#" class="btn">Čítať viac</a>
      </div>

      <div class="box">
        <i class="fa-solid fa-envelope"></i>
        <h3>KONTAKT</h3>
        <p>
          Ak vás zaujali naše služby, alebo sa vám páčia naše práce neváhajte
          nás kontaktovať telefonicky alebo e-mailom. Tešíme sa na spoluprácu.
        </p>
        <a href="#" class="btn">Čítať viac</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.service {
  background: #f0f0f0;
  padding-top: 1rem;
}

.service .box-container {
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.service .box-container .box {
  background: #fff;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin: 1.5rem;
  width: 32rem;
}

.service .box-container .box:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}

.service .box-container .box h3 {
  font-size: 2rem;
  color: var(--blue);
}

.service .box-container i {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--blue-light);
}

.service .box-container .box p {
  font-size: 1.4rem;
  color: #999;
  padding: 1rem 0;
  line-height: 1.5;
}
</style>
