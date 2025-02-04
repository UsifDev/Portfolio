<template>
  <section class="about" id="about">
    <div class="about-img">
      <img :src="portfolioData.about.imagePath" alt="profile image" />
    </div>
    <div class="about-text">
      <h2>{{ portfolioData.about.title }}</h2>
      <h4>{{ portfolioData.about.subtitle }}</h4>
      <div class="about-text" v-for="(desc, i) in portfolioData.about.description" :key="i">
        <p>{{ desc }}</p>
        <br v-if="i == portfolioData.about.description.length" />
      </div>
      <div class="about-gri">
        <div class="about-in" v-for="(skill, i) in portfolioData.about.skills" :key="i">
          <h5>{{ skill }}</h5>
        </div>
      </div>
      <a href="#contact" class="btn">Contact Me</a>
    </div>
  </section>
</template>

<script>
import { portfolioData } from '@/assets/data.js'

export default {
  data() {
    return {
      portfolioData,
    }
  },
  name: 'AboutComp',
}
</script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
}

.about-img img {
  height: auto;
  width: 100%;
  max-width: 460px;
}

.about-text h2 {
  font-size: var(--h2-font);
}

.about-text h4 {
  margin: 10px 0;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 600;
}

.about-text p {
  color: var(--second-color);
  font-size: var(--p-font);
  line-height: 30px;
  margin-bottom: 2rem;
}

.about-gri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.about-in h5 {
  font-size: 22px;
  font-weight: 600;
}
</style>
