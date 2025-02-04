<template>
  <header :class="{ sticky: isSticky }">
    <h2 class="logo" v-html="portfolioData.header.logo"></h2>
    <ul class="navbar" :class="{ active: isMenuActive }">
      <li v-for="(link, index) in portfolioData.header.navLinks" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
    <i id="menu-icon" @click="toggleMenu">&#9776;</i>
  </header>
</template>

<script>
import { portfolioData } from '@/assets/data.js'

export default {
  data() {
    return {
      isSticky: false,
      isMenuActive: false,
      portfolioData,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.isSticky = window.scrollY > 0
    })
  },
  name: 'HeaderComp',
}
</script>

<style scoped>
header {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 22px 16%;
  border-bottom: 1px solid transparent;
  transition: all 0.4s ease;
}

header.sticky {
  padding: 10px 16%;
  background: var(--bg-color);
  border-bottom: 1px solid #0e1630;
}

.logo {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-color);
}

.logo span {
  color: var(--main-color);
}

.navbar {
  display: flex;
}

.navbar a {
  color: var(--text-color);
  font-size: var(--p-font);
  font-weight: bold;
  padding: 10px 25px;
  margin: 0 2px;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
}

.navbar a:hover {
  background: var(--main-color);
  color: var(--text-color);
}

#menu-icon {
  font-size: 36px;
  color: var(--text-color);
  z-index: 10001;
  cursor: pointer;
  display: none;
}
</style>
