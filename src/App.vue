<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const menuOpen = ref(false)
const openSection = ref('')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const toggleSection = (section: string) => {
  openSection.value = openSection.value === section ? '' : section
}
</script>


<template>
  <div class="header">
    <div class="nav-logo">
      <img src="../dist/assets/logo2.png" />
    </div>
    <div class="nav-toggle" @click="toggleMenu">
      <font-awesome-icon :icon="menuOpen ? 'times' : 'bars'" />
    </div>
    <nav :class="{ 'nav-open': menuOpen }">
      <RouterLink class="anchor-tags" to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink class="anchor-tags" to="/about" @click="closeMenu">About Us</RouterLink>
      <RouterLink class="anchor-tags" to="/Services" @click="closeMenu">Services</RouterLink>
      <RouterLink class="anchor-tags" to="/Pricing" @click="closeMenu">Pricing</RouterLink>
      <RouterLink class="anchor-tags" to="/Contact" @click="closeMenu">Contact</RouterLink>
    </nav>
  </div>
  <RouterView />
  <footer>
    <div class="container">
      <div class="footer-links">
        <div class="footer-section" @click="toggleSection('about')">
          <div class="footer-header">
            <div class="dropdown-content">
              <h3>About Us</h3>
              <font-awesome-icon
                class="dropdown"
                :icon="openSection === 'about' ? 'chevron-up' : 'chevron-down'"
              />
            </div>
          </div>
          <ul :class="{ 'dropdown-open': openSection === 'about' }">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Mission & Vision</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div class="footer-section" @click="toggleSection('services')">
          <div class="footer-header">
            <div class="dropdown-content">
              <h3>Services</h3>
              <font-awesome-icon
                class="dropdown"
                :icon="openSection === 'services' ? 'chevron-up' : 'chevron-down'"
              />
            </div>
          </div>
          <ul :class="{ 'dropdown-open': openSection === 'services' }">
            <li><a href="#">Tutoring</a></li>
            <li><a href="#">Mentorship</a></li>
            <li><a href="#">Workshops</a></li>
          </ul>
        </div>
        <div class="footer-section" @click="toggleSection('contact')">
          <div class="footer-header">
            <div class="dropdown-content">
              <h3>Contact Us</h3>
              <font-awesome-icon
                class="dropdown"
                :icon="openSection === 'contact' ? 'chevron-up' : 'chevron-down'"
              />
            </div>
          </div>
          <ul :class="{ 'dropdown-open': openSection === 'contact' }">
            <li><a href="#">Email</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </div>
        <div class="footer-section" @click="toggleSection('support')">
          <div class="footer-header">
            <div class="dropdown-content">
              <h3>Support</h3>
              <font-awesome-icon
                class="dropdown"
                :icon="openSection === 'support' ? 'chevron-up' : 'chevron-down'"
              />
            </div>
          </div>
          <ul :class="{ 'dropdown-open': openSection === 'support' }">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="social-media">
        <h3>Social Media</h3>
        <div class="icons">
          <ul>
            <li>
              <a class="facebook" href="#"><img src="./assets/facebook.png" alt="Facebook" /></a>
            </li>
            <li>
              <a class="youtube" href="#"><img src="./assets/YouTube.png" alt="YouTube" /></a>
            </li>
            <li>
              <a class="insta" href="#"><img src="./assets/insta.png" alt="Instagram" /></a>
            </li>
            <li>
              <a class="linkdin" href="#"><img src="./assets/LinkedIn.png" alt="LinkedIn" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Educrib. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
nav {
  border-block-end: none;
  padding: 23px 4px;
  font-size: 18px;
  list-style: none;
  text-align: right;
}
.nav-logo {
  height: 30px;
}
.nav-logo img {
  margin-top: -24px;
  padding: 0 20px;
  width: 191px;
  height: 70px;
}
.anchor-tags {
  text-decoration: none;
  padding-inline-end: 27px;
}

.anchor-tags:hover {
  text-decoration: underline;
  text-decoration-color: rgb(27, 100, 136);
  text-decoration-thickness: 1px;
}
.header {
  border-block-end: 1px solid rgb(99, 98, 98);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px;
}
.nav-toggle {
  display: none;
  cursor: pointer;
}

.nav-open {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 1000px) {
  .nav-toggle {
    display: block;
  }

  nav {
    line-height: 38px;
    transform: translateX(-50%);
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 28%;
    background-color: #a0d4ec;
    position: absolute;
    top: 6.5%;
    left: 81%;
    padding: 34px 24px;
  }

  nav.nav-open {
    display: flex;
  }
  .nav-logo img {
    margin-top: -4px;
    padding: 0;
    width: 109px;
    height: 33px;
  }
}
</style>
