<template>
  <section class="my-projects" id="portfolio">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-container">
      <ProjectCardComp
        v-for="project in recentProjects"
        :key="project.id"
        :project="project"
        @details-click="openProjectModal(project)"
      />
    </div>
  </section>
</template>

<script setup>
import { useProjectsData } from "@/composables/useProjectsData";
const { recentProjects } = useProjectsData();

const emit = defineEmits(["details-click"]);
const openProjectModal = (project) => {
  emit("details-click", project);
};
</script>

<script>
import ProjectCardComp from "@/components/ProjectCard.vue";
export default {
  name: "MyProjectsComp",
  components: {
    ProjectCardComp,
  },
};
</script>

<style scoped>
.my-projects {
  padding: 2rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--accent-color);
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
