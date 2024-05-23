import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App.vue';
import router from './router';
library.add(faChevronDown, faChevronUp);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAePgJRDzG-sjjqrd47xE5loMUzXtXCgYQ",
  authDomain: "vitrualtutor-f5213.firebaseapp.com",
  projectId: "vitrualtutor-f5213",
  storageBucket: "vitrualtutor-f5213.appspot.com",
  messagingSenderId: "657568830117",
  appId: "1:657568830117:web:25c4609f3f0d4b0f52f34c",
  measurementId: "G-PCD9YVDJ4D"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if in a browser environment
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(firebaseApp);
}

// Create the Vue app instance
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
