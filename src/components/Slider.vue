<template>
  <section class="home" id="home">
    <div class="content">
      <!-- <span>Kto sme?</span> -->
      <div class="content__info">
        <h3>INADEN - Kovovýroba</h3>
        <p>
          Zabezpečujeme unikátne spracovanie našich výrobkov z nereze a ocele
          najvyššej kvality, čím dokážeme uspokojiť požiadavky každého
          zákazníka, Našou prednosťou je rýchlosť a flexibilita, naším cieľom –
          spokojný zákazník.
        </p>
      </div>
      <router-link to="/aboutcompany" class="btn">O firme</router-link>
    </div>
    <div class="image">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :centeredSlides="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="image in images" :key="image.id">
          <img :src="image.imageUrl" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination],
      images: [
        {
          id: 1,
          imageUrl: require('../assets/img/hlavneObr1.jpg'),
        },
        {
          id: 2,
          imageUrl: require('../assets/img/hlavneObr2.jpg'),
        },
        {
          id: 3,
          imageUrl: require('../assets/img/hlavneObr3.jpg'),
        },
        {
          id: 4,
          imageUrl: require('../assets/img/hlavneObr4.jpg'),
        },
        {
          id: 5,
          imageUrl: require('../assets/img/hlavneObr5.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
}

.home {
  position: relative;
  min-height: 42vh;
  overflow: hidden;
}

.home .content {
  position: absolute;
  top: 50%;
  left: 9%;
  transform: translateY(-50%);
  width: 50%;
  max-width: 55rem;
  text-align: left;
}

.home .content .content__info {
  background-color: rgb(38, 38, 38, 0.5);
  padding: 2rem;
}

.home .content .content__info h3 {
  font-size: 3rem;
  color: var(--white);
  margin-bottom: 2rem;
}

.home .content .content__info p {
  font-size: 1.6rem;
  color: var(--white);
  line-height: 1.5;
}

.home .btn {
  color: var(--white);
  background-color: var(--blue);
}

.home .btn:hover {
  color: var(--blue);
  background-color: var(--white);
}
* .swiper {
  width: 100%;
  height: 100%;
  z-index: -10;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
