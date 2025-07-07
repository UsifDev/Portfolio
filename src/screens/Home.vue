<template>
  <section class="home" id="home">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="@/media/portfolioBackground.mp4" type="video/mp4" />
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
import { homeData } from "@/media/data.js";

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
  height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

span {
  color: var(--main-color);
}

.back-video {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.home-name {
  flex-direction: row;
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
