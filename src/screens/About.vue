<template>
  <section class="about" id="about">
    <div class="about-img">
      <img :src="aboutData.image.path" :alt="aboutData.image.alt" />
    </div>
    <div class="about-text">
      <h2>About me</h2>
      <br />
      <div class="accent-about-text"></div>
      <br />
      <br />
      <div
        class="about-text"
        v-for="(desc, i) in aboutData.description"
        :key="i"
      >
        <p v-html="desc"></p>
        <br v-if="i == aboutData.description.length" />
      </div>
      <div class="about-gri">
        <div class="about-in" v-for="(skill, i) in aboutData.skills" :key="i">
          <h5>{{ skill }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutData } from "@/assets/data.js";

export default {
  data() {
    return {
      aboutData,
    };
  },
  name: "AboutComp",
};
</script>

<style scoped>
.about {
  background: var(--bg-color);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.about-img img {
  background-color: white;
  border-radius: 100px;
  padding: 25px;
  height: auto;
  width: 80%;
  max-width: 360px;
}

.accent-about-text {
  background-color: var(--main-color);
  padding-top: 5px;
  padding-bottom: 5px;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: repeat(auto-fit, minmax(70px, auto));
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.about-in h5 {
  font-size: 22px;
  font-weight: 600;
}
</style>
