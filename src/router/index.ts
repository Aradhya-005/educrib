import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('../views/SignInView.vue'),
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../views/SignUpView.vue'),
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/pricingView.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: { authRequired: true },
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth(); // Get the auth instance
  const requiresAuth = to.matched.some(record => record.meta.authRequired);

  if (requiresAuth) {
    const user = auth.currentUser;
    if (user) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next('/SignIn');
    }
  } else {
    next();
  }
});

export default router;
