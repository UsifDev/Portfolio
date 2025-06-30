<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="emit('close')">×</button>

      <div class="modal-header">
        <h3 class="skill-title">{{ skillName }}</h3>
        <div
          v-if="getSkill(props.skillName).isHighlighted"
          class="highlight-tag"
        >
          Highlighted
        </div>
      </div>

      <div class="modal-body">
        <div class="applied-section">
          <span class="applied-label">Applied most in:</span>
          <a
            v-if="primaryProject"
            href="#"
            class="project-link"
            @click.prevent="scrollToProject(primaryProject.id)"
          >
            {{ primaryProject.title }}
          </a>
          <span v-else class="no-project">No specific project</span>
        </div>

        <div class="projects-list">
          <h4>
            Used in {{ getSkill(props.skillName).projects.length }} project{{
              getSkill(props.skillName).projects.length !== 1 ? "s" : ""
            }}
          </h4>
          <ul>
            <li
              v-for="project in getSkill(props.skillName).projects"
              :key="project.id"
            >
              {{ project.title }} ({{ formatDate(project.date) }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";

const { getProject, getSkill } = useProjectsData();

const props = defineProps({
  skillName: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const primaryProject = computed(() => {
  return (
    getSkill(props.skillName)
      .projects.toSorted((a, b) => new Date(b.date) - new Date(a.date))
      .find((proj) => getProject(proj.id)?.highlighted) ||
    getSkill(props.skillName).projects[0]
  );
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

const scrollToProject = (projectId) => {
  emit("close");
  // You would implement this function to scroll to the project
  // For example using a Vue ref or a scrollTo function
  console.log("Scroll to project", projectId);
};
</script>

<script>
export default {
  name: "SkillModalComp",
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text);
}

.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.skill-title {
  font-size: 1.8rem;
  margin-right: 1rem;
}

.highlight-tag {
  background-color: #646cff;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.applied-section {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.applied-label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.project-link {
  color: #646cff;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

.no-project {
  font-style: italic;
  color: var(--color-text-mute);
}

.projects-list h4 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.projects-list ul {
  list-style-type: none;
  padding-left: 0;
}

.projects-list li {
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--color-border-mute);
}
</style>
