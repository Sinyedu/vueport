import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Home from '../../src/views/Home.vue';
import About from '../../src/views/About.vue';
import Projects from '../../src/views/Projects.vue';
import Contact from '../../src/views/Contact.vue';

const routes = [
  { path: '/', component: Home }, 
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
