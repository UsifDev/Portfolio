<template>
  <section class="skills" id="skills">
    <div class="main-text">
      <h2>{{ portfolioData.skills.title }}</h2>
    </div>
    <div class="skills-content">
      <div
        class="box"
        v-for="skill in portfolioData.skills.informative"
        :key="skill.name"
      >
        <img :src="skill.icon.path" :alt="skill.name" />
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioData } from "@/assets/data.js";

export default {
  data() {
    return {
      portfolioData,
    };
  },
  name: "SkillsComp",
};
</script>

<style scoped>
.skills-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  align-items: center;
  text-align: center;
  gap: 2rem;
  margin-top: 5rem;
}

.box {
  padding: 45px;
  background: #12141c;
  border-top: 5px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  cursor: pointer;
}

.box h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 15px 0;
  transition: all 0.4s ease;
}

.box p {
  color: var(--second-color);
  font-size: var(--p-font);
  line-height: 30px;
}

.box:hover {
  transform: scale(1.01) translateY(-5px);
  border-top: 5px solid var(--main-color);
}

.box:hover h3 {
  color: var(--main-color);
}
</style>
