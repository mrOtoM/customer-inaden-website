import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutCompany from '../views/AboutCompany.vue';
import Services from '../views/Services.vue';
import Photos from '../views/Photos.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aboutcompany',
    name: 'AboutCompany',
    component: AboutCompany,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
