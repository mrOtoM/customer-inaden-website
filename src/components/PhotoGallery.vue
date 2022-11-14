<template>
  <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
      v-for="item in items"
      :key="item.id"
      :data-lg-size="item.size"
      className="gallery-item"
      :data-src="item.src"
    >
      <img className="img-responsive" :src="item.thumb" />
    </a>
  </lightgallery>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery;
export default {
  name: 'App',
  components: {
    Lightgallery,
  },
  watch: {
    items(newVal, oldVal) {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  data: () => ({
    plugins: [lgZoom],
    items: [
      {
        id: '1',
        size: '1400-800',
        src: './assets/img/Gallery1.jpg',
        thumb: './assets/img/Gallery1.jpg',
      },
      {
        id: '2',
        size: '1400-800',
        src: './assets/img/Gallery2.jpg',
        thumb: './assets/img/Gallery2.jpg',
      },
      {
        id: '3',
        size: '1400-800',
        src: './assets/img/Gallery3.jpg',
        thumb: './assets/img/Gallery3.jpg',
      },
      {
        id: '4',
        size: '1400-800',
        src: './assets/img/Gallery4.jpg',
        thumb: './assets/img/Gallery4.jpg',
      },
      {
        id: '5',
        size: '1400-800',
        src: './assets/img/Gallery5.jpg',
        thumb: './assets/img/Gallery5.jpg',
      },
      {
        id: '6',
        size: '1400-800',
        src: './assets/img/Gallery6.jpg',
        thumb: './assets/img/Gallery6.jpg',
      },
      {
        id: '7',
        size: '1400-800',
        src: './assets/img/Gallery7.jpg',
        thumb: './assets/img/Gallery7.jpg',
      },
      {
        id: '8',
        size: '1400-800',
        src: './assets/img/Gallery8.jpg',
        thumb: './assets/img/Gallery8.jpg',
      },
      {
        id: '9',
        size: '1400-800',
        src: './assets/img/Gallery9.jpg',
        thumb: './assets/img/Gallery9.jpg',
      },
      {
        id: '10',
        size: '1400-800',
        src: './assets/img/Gallery10.jpg',
        thumb: './assets/img/Gallery10.jpg',
      },
      {
        id: '11',
        size: '1400-800',
        src: './assets/img/Gallery11.jpg',
        thumb: './assets/img/Gallery11.jpg',
      },
    ],
  }),
  methods: {
    onInit: detail => {
      lightGallery = detail.instance;
    },
    // updateSlides: function () {
    //   this.items = [
    //     ...this.items,
    //     {
    //       id: '5',
    //       size: '1400-800',
    //       src: 'img-5.jpg',
    //       thumb: 'thumb-5.jpg',
    //     },
    //   ];
    //   lightGallery.refresh();
    // },
  },
};
</script>
