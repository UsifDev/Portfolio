<template>
  <section class="skills-showcase" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <SkillBadgeComp
          :name="skill.name"
          :highlighted="skill.isHighlighted"
          clickable
          @open-project="openProjectModal"
        />
      </div>
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

const { skills, getProject } = useProjectsData();
const showModal = ref(false);
const initialObject = ref(null);

const openProjectModal = (project) => {
  initialObject.value = getProject(project.id);
  showModal.value = true;
};
</script>

<script>
import SkillBadgeComp from "@/components/SkillBadge.vue";
import ProjectDetailsModalComp from "./ProjectDetailsModal.vue";

export default {
  name: "SkillsShowcaseComp",
  components: {
    ProjectDetailsModalComp,
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.skills-showcase {
  padding: 3rem 0;
  background: var(--bg-color);
  margin-bottom: 100px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--color-border);
  border-radius: 8px;
}

.skill-item {
  background: white;
  padding: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}

.skill-item:hover {
  background: var(--color-background-soft);
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: white;
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
