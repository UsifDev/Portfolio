<template>
  <div class="inner">
    <div class="Tech_header">
      <h1>Tech Skills</h1>
    </div>
    <div class="Tcontainer">
      <div
        class="skill-box"
        v-for="skill in portfolioData.skills.stack"
        :key="skill.name"
      >
        <div class="skill-title">
          <div class="tech_img">
            <img class="skill-icon" :src="skill.icon.path" :alt="skill.name" />
          </div>
          <h3>{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolioData } from "@/assets/data.js";

export default {
  data() {
    return {
      portfolioData,
    };
  },
  name: "TechnicalSkillsComp",
};
</script>

<style scoped>
.inner {
  padding-top: 20px;
}

.Tech_header {
  text-align: center;
  color: #fff;
  padding: 1rem;
  position: relative;
}

.Tech_header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: 100px;
  background-color: #eb4a4a;
  border-radius: 2px;
}

.Tcontainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}

.skill-box {
  padding: 1rem;
  color: #ddd;
  cursor: pointer;
}

.skill-box:hover > .skill-title:after,
.skill-box:hover > .skill-title:before {
  width: 35px;
}

.skill-box:hover .tech_img {
  transform: translateY(-10px);
}

.skill-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.skill-title:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 0;
  height: 4px;
  border-radius: 2px 0 0 2px;
  background-color: #eb4a4a;
  transition: 0.5s;
}

.skill-title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 4px;
  border-radius: 0 2px 2px 0;
  background-color: #eb4a4a;
  transition: 0.5s;
}

.tech_img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.tech_img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 90px;
  background: rgba(100, 100, 100, 0.5);
  border-radius: 45px 0 0 45px;
}

.skill-title h3 {
  color: #fff;
  margin-top: 0.5rem;
}

.skill-icon {
  width: 50px;
  height: 50px;
  z-index: 2;
}

@media screen and (max-width: 990px) {
  .Tcontainer {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 50px;
  }
}

@media screen and (max-width: 650px) {
  .Tcontainer {
    grid-template-columns: 1fr;
  }
}
</style>
