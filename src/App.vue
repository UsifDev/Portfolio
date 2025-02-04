<template>
  <div id="app">
    <HeaderComp />
    <HomeComp />
    <AboutComp />
    <TechnicalSkillsComp />
    <ExperienceComp />
    <SkillsComp />
    <AchievementsComp />
    <PortfolioComp />
    <ContactComp />
    <a href="#" class="top"><i class="bx bx-up-arrow-alt"></i></a>
  </div>
</template>

<script>
import HeaderComp from './components/Header.vue'
import HomeComp from './components/Home.vue'
import AboutComp from './components/About.vue'
import TechnicalSkillsComp from './components/TechnicalSkills.vue'
import ExperienceComp from './components/Experience.vue'
import SkillsComp from './components/Skills.vue'
import AchievementsComp from './components/Achievements.vue'
import PortfolioComp from './components/Portfolio.vue'
import ContactComp from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    HomeComp,
    AboutComp,
    TechnicalSkillsComp,
    ExperienceComp,
    SkillsComp,
    AchievementsComp,
    PortfolioComp,
    ContactComp,
  },
}
</script>

<style>
/* Global Styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
}

:root {
  --bg-color: #020312;
  --text-color: #fff;
  --main-color: #eb4a4a;
  --second-color: gray;
  --other-color: #12141c;
  --h1-font: 5.2rem;
  --h2-font: 3.5rem;
  --p-font: 1.1rem;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

section {
  padding: 160px 16% 90px;
}

.btn {
  display: inline-block;
  padding: 14px 40px;
  border-radius: 0.5rem;
  font-size: 17px;
  font-weight: 500;
  background: var(--main-color);
  color: var(--text-color);
  border: 1px solid var(--main-color);
  transition: all 0.4s ease;
}

.btn:hover {
  transform: scale(1.01) translateY(-5px);
  background: transparent;
  border: 1px solid var(--main-color);
}

.main-text {
  text-align: center;
}

.main-text h2 {
  font-size: var(--h2-font);
  margin-bottom: 10px;
}

.main-text h4 {
  color: var(--main-color);
  font-size: 24px;
  font-weight: 600;
}

.top {
  position: fixed;
  bottom: 2.1rem;
  right: 2.1rem;
}

.top i {
  color: var(--text-color);
  background: var(--main-color);
  font-size: 20px;
  padding: 10px;
  border-radius: 0.5rem;
}

@media (max-width: 1325px) {
  header {
    padding: 16px 3%;
  }
  header.sticky {
    padding: 8px 3%;
  }
  section {
    padding: 130px 3% 60px;
  }
}

@media (max-width: 970px) {
  :root {
    --h1-font: 4.2rem;
    --h2-font: 2.9rem;
    --p-font: 1rem;
  }
  section {
    padding: 70px 3% 60px;
  }
}

@media (max-width: 830px) {
  #menu-icon {
    display: block;
  }
  .navbar {
    position: absolute;
    top: -600px;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background: #12141c;
    text-align: left;
    transition: all 0.4s ease;
  }
  .navbar a {
    display: block;
    padding: 1rem;
    margin: 1rem;
  }
  .navbar.active {
    top: 100%;
  }
  :root {
    --h1-font: 3.7rem;
    --h2-font: 2.7rem;
  }
}
</style>
