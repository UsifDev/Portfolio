<template>
  <section class="other-works">
    <h2 class="section-title">Other Works</h2>
    <div class="works-grid">
      <CompactProjectCardComp
        v-for="project in otherProjects"
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
const { otherProjects } = useProjectsData();

const showModal = ref(false);
const initialObject = ref(null);

const openProjectModal = (project) => {
  initialObject.value = project;
  showModal.value = true;
};
</script>

<script>
import CompactProjectCardComp from "@/components/CompactProjectCard.vue";
import ProjectDetailsModalComp from "./ProjectDetailsModal.vue";
export default {
  name: "OtherWorksComp",
  components: {
    CompactProjectCardComp,
    ProjectDetailsModalComp,
  },
};
</script>

<style scoped>
.other-works {
  padding: 3rem 0;
  background: var(--bg-color);
  margin-top: 3rem;
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

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.compact-card {
  position: relative;
  height: 240px;
  background: white;
  border-radius: 8px;
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  z-index: 1;
}

.compact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.image-preview {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: calc(100% + 10px);
  background: var(--accent-color);
  border-radius: 8px;
  z-index: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
