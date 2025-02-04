<template>
  <section class="portfolio" id="portfolio">
    <div class="main-text">
      <h2>My Projects</h2>
      <h4>Some Of My Works</h4>
    </div>
    <div class="portfolio-content">
      <div
        class="row"
        v-for="project in portfolioData.projects"
        :key="project.title"
      >
        <a :href="project.link" target="_blank">
          <img :src="project.image.path" :alt="project.image.alt" />
        </a>
        <div class="main-row">
          <div class="row-text">
            <h6>{{ project.type }}</h6>
          </div>
        </div>
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioData } from "@/assets/data.js";

export default {
  data() {
    return { portfolioData };
  },
  name: "PortfolioComp",
};
</script>

<style scoped>
.portfolio-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
}

.row {
  padding: 25px;
  background: #12141c;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
}

.row img {
  height: auto;
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.main-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.row h3 {
  font-size: 25px;
  font-weight: 700;
}

.row h6 {
  color: var(--main-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
}

.row:hover {
  transform: scale(1.01) translateY(-5px);
  cursor: pointer;
}
</style>
