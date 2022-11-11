<template>
  <div class="swiper__size">
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
.swiper__size {
  max-width: 100%;
  margin: auto;
}

html,
body {
  position: relative;
  height: 100%;
  background-color: aqua;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
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
