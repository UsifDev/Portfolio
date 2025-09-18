<template>
  <header :class="{ sticky: isSticky }">
    <DevNameComp class="logo" />
    <ul class="navbar" v-if="isMenuActive">
      <li v-for="(link, index) in headerData.navLinks" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
    <div :class="['menu-icon-wrapper', { inactive: !isMenuActive }]">
      <p id="menu-icon" @click="toggleMenu">&#9776;</p>
    </div>
    <a href="#contact" class="btn" id="contact-me-btn">Contact me</a>
  </header>
</template>

<script>
import DevNameComp from "@/components/DevName.vue";
import { headerData } from "@/assets/data.js";

export default {
  data() {
    return {
      isSticky: false,
      isMenuActive: false,
      headerData,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.isSticky = window.scrollY > 0;
    });
  },
  name: "HeaderComp",
  components: {
    DevNameComp,
  },
};
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
  border-bottom: 1px solid transparent;
  transition: all 0.4s ease;
  font-size: 1.3em;
  padding: 10px 10%;
}

header.sticky {
  padding: 10px 16%;
  background: var(--bg-color);
  line-height: 1.2;
  border-bottom: 1px solid #0e1630;
}

.logo {
  font-weight: 600;
  color: var(--text-color);
  font-size: 2em;
}

.btn {
  margin-right: 50px;
  font-size: 1.3rem;
}

.navbar {
  display: flex;
}

.navbar a {
  color: var(--text-color);
  font-weight: bold;
  padding: 10px 25px;
  margin: 0 0px;
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
}

.menu-icon-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.menu-icon-wrapper.inactive {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
}

@media (orientation: landscape) and (max-width: 1200px) {
  header {
    padding: 8px 4%;
    min-height: 48px;
  }
  .navbar a {
    padding: 8px 12px;
  }

  .btn {
    padding: 10px 20px;
    margin-right: 50px;
  }

  #menu-icon {
    font-size: 18px;
    padding-left: 5px;
    padding-right: 5px;
  }

  header.sticky {
    padding: 10px 10%;
  }
}

@media (orientation: portrait) and (max-width: 900px) {
  #menu-icon {
    display: none;
  }
  header {
    font-size: 1em;
    padding: 9px 6%;
  }
  .btn {
    margin-right: 0px;
  }
  header.sticky {
    padding: 10px 10%;
  }
}
</style>
