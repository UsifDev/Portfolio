<template>
  <section class="achievement" id="achievement">
    <div class="main-text">
      <h2>My Achievements</h2>
      <h4>Some of My Major Achievements</h4>
    </div>
    <div class="portfolio-content">
      <div class="row" v-for="achievement in portfolioData.achievements" :key="achievement.title">
        <img :src="achievement.image" />
        <div class="main-row">
          <div class="row-text">
            <h6>{{ achievement.description }}</h6>
          </div>
        </div>
        <h3>{{ achievement.title }}</h3>
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
  name: 'AchievementsComp',
}
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
