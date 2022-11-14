<template>
  <section class="process" id="process">
    <h1 class="heading">Ako to cele funguje?</h1>
    <p class="description">
      Aby sme sa vyhli určitým nepríjemnostiam, máme celkový výrobný proces
      rozdelený do niekoľkých bodov, spolu s otvorenou komunikáciou s Vami.
    </p>

    <div class="box-container">
      <div class="box">
        <span>1</span>
        <h3>Kontaktuje nás</h3>
        <p>
          Pri prvom kontakte nám predstavité svoje požiadavky a možnosti
          realizácie. My Vám poradíme a oboznámie Vás s technologickým postupom.
        </p>
      </div>

      <div class="box">
        <span>2</span>
        <h3>Vytvorenie projektu</h3>
        <p>
          Následne vypracujeme projekt s úzkou komunikaciou s Vami. Aby sme
          dostali čo najefektívnejšie k vzhotoveniu.
        </p>
      </div>

      <div class="box">
        <span>3</span>
        <h3>Schvalovací proces</h3>
        <p>
          Aby sme predišli problémom, celý projekt prebieha schvalovacím
          procesom. O každom kroku budete informovaný.
        </p>
      </div>

      <div class="box">
        <span>4</span>
        <h3>Montáž</h3>
        <p>
          Pokial súčastou projektu bola aj jeho montáž, zrealizujeme ju v predom
          dohodnutom termíne.
        </p>
      </div>

      <div class="box">
        <span>5</span>
        <h3>Finálne odovzdanie</h3>
        <p>
          Finálne odovzdanie projektu je súčasťou procesu ukončenie projektu
        </p>
      </div>
    </div>

    <router-link to="/contact" class="btn">Kontaktuj nás</router-link>
  </section>
</template>

<script>
export default {};
</script>

<style>
.process {
  background: #f9f9f9;
  text-align: center;
  padding-top: 1rem;
}

.process .box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.process .box-container .box {
  margin: 1.5rem;
  padding: 3rem;
  background: #fff;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
  width: 32rem;
  height: 20rem;
}

.process .box-container .box span {
  color: var(--blue);
  border: 0.2rem solid var(--blue);
  display: block;
  height: 6rem;
  width: 6rem;
  line-height: 6rem;
  text-align: center;
  border-radius: 50%;
  font-size: 2.5rem;
  background: #dee4ee;
  margin: 0 auto;
  margin-top: -6rem;
}

.process .box-container .box h3 {
  color: var(--blue);
  font-size: 2rem;
  margin-top: 1rem;
}

.process .box-container .box p {
  color: #999;
  font-size: 1.3rem;
  padding: 1rem;
  line-height: 1.7;
}

.process .btn {
  /* background: var(--blue); */
  color: #fff;
  margin-bottom: 4rem;
  background-color: var(--blue);
}

.process .btn:hover {
  opacity: 0.8;
}
</style>
