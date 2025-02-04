<template>
  <section class="home" id="home">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="@/assets/portfolioBackground.mp4" type="video/mp4" />
    </video>
    <div class="home-text">
      <h4>{{ portfolioData.home.greeting }}</h4>
      <h1 v-html="portfolioData.home.name"></h1>
      <h3>{{ portfolioData.home.role }}</h3>
      <a :href="portfolioData.home.resumeLink" class="btn" target="_blank"
        >Download Resume</a
      >
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
  name: "HomeComp",
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.home-text {
  margin-left: 60%;
}

.home-text h1 {
  margin: 15px 0;
  font-size: var(--h1-font);
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: 2px;
}

.home-text h4 {
  color: var(--main-color);
  font-size: 24px;
  font-weight: 600;
}

.home-text h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 3rem;
}

@media (min-aspect-ratio: 16/10) {
  .back-video {
    width: 110%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/10) {
  .back-video {
    width: auto;
    height: 100%;
  }
}
</style>
