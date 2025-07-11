<template>
  <div id="app">
    <HeaderComp />
    <HomeComp />
    <AboutComp @details-click="openProjectModal" />
    <ContactComp />

    <div class="portfolio-app">
      <MyProjectsComp @details-click="openProjectModal" />
      <OtherWorksComp @details-click="openProjectModal" />
      <SkillsShowcaseComp @details-click="openProjectModal" />
    </div>
    <ProjectDetailsModalComp
      v-if="showModal"
      :initial-project="initialObject"
      @close="showModal = false"
    />
    <a href="#" class="top"><i class="bx bx-up-arrow-alt"></i></a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";

const { getProject } = useProjectsData();
const showModal = ref(false);
const initialObject = ref(null);

const openProjectModal = (project) => {
  initialObject.value = getProject(project.id);
  showModal.value = true;
};
</script>

<script>
import MyProjectsComp from "./screens/MyProjects.vue";
import OtherWorksComp from "./screens/OtherWorks.vue";
import SkillsShowcaseComp from "./screens/SkillsShowcase.vue";
import HeaderComp from "./screens/Header.vue";
import HomeComp from "./screens/Home.vue";
import AboutComp from "./screens/About.vue";
import ContactComp from "./screens/Contact.vue";
import ProjectDetailsModalComp from "./screens/ProjectDetailsModal.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    HomeComp,
    AboutComp,
    ContactComp,
    MyProjectsComp,
    OtherWorksComp,
    SkillsShowcaseComp,
    ProjectDetailsModalComp,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
}

:root {
  --bg-color: #0e1c1f;
  --text-color: #fff;
  --main-color: #eb4a4a;
  --second-color: gray;
  --other-color: #12141c;
  --h1-font: 5.2rem;
  --h2-font: 3.5rem;
  --p-font: 1.1rem;
  --gap: 20px;
  --badge-size: 120px;

  --color-highlight1: #eb4a4a;
  --color-highlight2: #d93838;

  --accent-color: #eb4a4a;
  --color-background: #ffffff;
  --color-background-soft: #f8f8f8;
  --color-background-mute: #f2f2f2;

  --color-border: #eaeaea;
  --color-border-hover: #d4d4d4;

  --color-heading: #1a1a1a;
  --color-text: #2c3e50;
  --color-text-mute: #7f7f7f;
}
.portfolio-app {
  width: 99.5%;
  padding-left: 0.5%;
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
  background: var(--color-highlight1);
  color: var(--text-color);
  border: 1px solid var(--main-color);
  transition: all 0.4s ease;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  transform: scale(1.01) translateY(-5px);
  background: var(--color-highlight2);
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
