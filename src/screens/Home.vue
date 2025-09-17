<template>
  <section class="home" id="home">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="/portfolioBackground.mp4" type="video/mp4" />
    </video>
    <div class="home-text">
      <h4>{{ homeData.greeting }}</h4>
      <div class="home-name">
        <DevNameComp />
      </div>
      <h3>{{ homeData.role }}</h3>
      <a :href="homeData.resumeLink" class="btn" target="_blank">Resume</a>
    </div>
  </section>
</template>

<script>
import DevNameComp from "@/components/DevName.vue";
import { homeData } from "@/assets/data.js";

export default {
  data() {
    return {
      homeData,
    };
  },
  name: "HomeComp",
  components: {
    DevNameComp,
  },
};
</script>

<style scoped>
.home {
  min-height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5rem;
  padding-bottom: 5rem;
  box-sizing: border-box;
}

.back-video {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.home-text {
  margin-left: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  z-index: 1;
}

.home-text h1 {
  margin: 15px 0;
  font-weight: bold;
  letter-spacing: 2px;
}

.home-text h4 {
  color: var(--main-color);
  font-weight: 600;
  font-size: 1.8em;
}

.home-text h3 {
  font-weight: 600;
  margin-bottom: 3rem;
  font-size: 2.3em;
}

@media (min-aspect-ratio: 16/10) {
  .back-video {
    width: 110%;
    height: auto;
  }
}

@media (max-width: 600px) and (orientation: portrait) {
  .home {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10rem;
    padding-bottom: 3rem;
    min-height: 70vh;
  }
  .home-text {
    margin-left: 0;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 1rem;
  }
  .back-video {
    width: auto;
    height: 100%;
  }
}
</style>
