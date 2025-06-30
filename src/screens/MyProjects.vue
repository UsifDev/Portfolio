<template>
  <section class="my-projects" id="portfolio">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-container">
      <ProjectCardComp
        v-for="project in recentProjects"
        :key="project.id"
        :project="project"
        @skill-click="openSkillModal"
      />
    </div>
    <SkillModalComp
      v-if="selectedSkill"
      :skillName="selectedSkill"
      @close="selectedSkill = null"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { recentProjects } = useProjectsData();

const selectedSkill = ref(null);

const openSkillModal = (skillName) => {
  selectedSkill.value = skillName;
};
</script>

<script>
import ProjectCardComp from "@/components/ProjectCard.vue";
import SkillModalComp from "./SkillModal.vue";
export default {
  name: "MyProjectsComp",
  components: {
    ProjectCardComp,
    SkillModalComp,
  },
};
</script>

<style scoped>
.my-projects {
  padding: 2rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-heading);
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
