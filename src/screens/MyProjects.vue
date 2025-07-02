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
    <ProjectDetailsModalComp
      v-if="showModal"
      :initial-project="initialObject"
      @close="showModal = false"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { recentProjects } = useProjectsData();

const showModal = ref(false);
const initialObject = ref(null);

const openProjectModal = (project) => {
  initialObject.value = project;
  showModal.value = true;
};
</script>

<script>
import ProjectCardComp from "@/components/ProjectCard.vue";
import ProjectDetailsModalComp from "./ProjectDetailsModal.vue";
export default {
  name: "MyProjectsComp",
  components: {
    ProjectCardComp,
    ProjectDetailsModalComp,
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
