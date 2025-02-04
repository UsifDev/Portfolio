<template>
  <section class="experience" id="experience">
    <div class="main-text">
      <h2>My Experiences</h2>
    </div>
    <br />
    <div class="experience-content">
      <div class="box" v-for="(exp, index) in portfolioData.experience" :key="index">
        <img :src="exp.imagePath" :alt="exp.company" />
        <h3>{{ exp.company }}</h3>
        <h4>
          <span>{{ exp.role }}</span>
        </h4>
        <p>
          <strong>{{ exp.duration }}</strong>
        </p>
        <ul>
          <li v-for="(resp, i) in exp.responsibilities" :key="i">{{ resp }}</li>
        </ul>
      </div>
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
  name: 'ExperienceComp',
}
</script>

<style scoped>
.experience-content {
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
