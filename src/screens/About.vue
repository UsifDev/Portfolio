<template>
  <section class="about" id="about">
    <div class="about-img">
      <img :src="aboutData.image.path" :alt="aboutData.image.alt" />
    </div>
    <div class="about-text">
      <h2>About me</h2>
      <div
        class="about-text"
        v-for="(desc, i) in aboutData.description"
        :key="i"
      >
        <p v-html="desc"></p>
        <br v-if="i == aboutData.description.length" />
      </div>
      <div class="about-gri">
        <div class="about-in" v-for="(skill, i) in skills.slice(0, 4)" :key="i">
          <SkillBadgeComp
            :name="skill.name"
            :highlighted="skill.isHighlighted"
            clickable
            @open-project="openProjectModal"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProjectsData } from "@/composables/useProjectsData";
const { skills, getProject } = useProjectsData();

const emit = defineEmits(["details-click"]);
const openProjectModal = (project) => {
  emit("details-click", getProject(project.id));
};
</script>

<script>
import { aboutData } from "@/assets/data.js";
import SkillBadgeComp from "@/components/SkillBadge.vue";
export default {
  data() {
    return {
      aboutData,
    };
  },
  name: "AboutComp",
  components: {
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.about {
  background: var(--bg-color);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

.about-img img {
  background-color: white;
  border-radius: 100px;
  padding: 25px;
  height: auto;
  width: 80%;
  max-width: 360px;
}

.about-text h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
}

.about-text h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2.3em;
  height: 3px;
  background: var(--accent-color);
}

.about-text p {
  text-align: center;
  color: var(--second-color);
  margin: 0rem 2rem 2rem 2rem;
}

.about-gri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: repeat(auto, minmax(70px, auto));
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 1rem;
}

@media (max-width: 600px) and (orientation: portrait) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
    width: 100vw;
    box-sizing: border-box;
  }
  .about-img {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .about-img img {
    min-width: 80px;
    max-width: 250px;
    border-radius: 50%;
    padding: 8px;
    margin-bottom: 0.5rem;
  }
  .about-text {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .about-text h2 {
    margin-top: 0.5rem;
    text-align: center;
  }
}
</style>
