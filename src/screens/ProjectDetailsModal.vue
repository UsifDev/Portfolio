<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="project-modal">
      <button class="close-button" @click="closeModal">×</button>

      <h2 class="project-title" :class="{ highlighted: project.highlighted }">
        {{ project.title }}
        <span v-if="project.highlighted" class="highlight-badge">Featured</span>
      </h2>

      <div class="accent-separator"></div>

      <div class="media-section" v-if="project.media && project.media.length">
        <div class="media-container">
          <img
            v-for="(media, index) in project.media"
            :key="index"
            :src="media.url"
            :alt="media.caption || 'Project media'"
            class="media-item"
            @click="openMediaViewer(index)"
          />
        </div>
      </div>

      <div class="description-section">
        <h3>Description</h3>
        <p>{{ project.description }}</p>
      </div>

      <div
        class="lessons-section"
        v-if="project.lessons && project.lessons.length"
      >
        <h3>Lessons Learned</h3>
        <ul>
          <li
            v-for="(lesson, index) in project.lessons"
            :key="`lesson-${index}`"
          >
            {{ lesson }}
          </li>
        </ul>
      </div>

      <div
        class="challenges-section"
        v-if="project.challenge"
      >
        <h3>Challenges Overcome</h3>
        {{ project.challenge }}
      </div>

      <div class="accent-separator"></div>

      <div class="skills-section">
        <h3>Skills Applied</h3>
        <div class="skills-grid">
          <SkillBadgeComp
            class="badge"
            v-for="skill in project.skills"
            :key="skill.name"
            :name="skill.name"
            :highlighted="getSkill(skill.name).isHighlighted"
            clickable
            :level="skill.level"
            @open-project="onProjectChanged"
          />
        </div>
      </div>
    </div>
    <MediaViewerComp
      v-if="showViewer"
      :media="project.media"
      :initial-index="currentMediaIndex"
      @close="showViewer = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { getSkill, getProject } = useProjectsData();

const props = defineProps({
  initialProject: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const project = ref(props.initialProject);

const onProjectChanged = (newProject) => {
  project.value = getProject(newProject.id);
};
const closeModal = () => {
  emit("close");
};

const showViewer = ref(false);
const currentMediaIndex = ref(0);

const openMediaViewer = (index) => {
  currentMediaIndex.value = index;
  showViewer.value = true;
};
</script>

<script>
import SkillBadgeComp from "@/components/SkillBadge.vue";
import MediaViewerComp from "./MediaViewer.vue";
export default {
  name: "ProjectDetailsModalComp",
  components: { SkillBadgeComp, MediaViewerComp },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.project-modal {
  position: relative;
  background: white;
  color: var(--color-text);
  border-radius: 8px;
  padding: 2rem;
  max-width: 800px; /* A4 width is 794px */
  max-height: 90vh;
  overflow: visible;
  overflow-y: auto;
  overflow-x: visible;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
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

.project-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  position: relative;
  padding-right: 2rem;
}

.project-title.highlighted {
  color: var(--accent-color);
}

.highlight-badge {
  position: absolute;
  top: -0.5rem;
  right: 0;
  background: var(--accent-color);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
}

.accent-separator {
  height: 3px;
  background: var(--accent-color);
  margin: 1.5rem 0;
  border-radius: 3px;
}

.media-section {
  margin: 0.5rem 0;
  width: 100%;
  overflow-x: auto; /* Allows horizontal scrolling if needed */
}

.media-container {
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem; /* Add some vertical padding */
  margin-top: 1rem;
  width: max-content; /* Let container expand horizontally */
  min-width: 100%; /* Ensure it fills parent width */
}

.media-item {
  width: 200px; /* Fixed width for consistent items */
  height: 150px;
  min-width: 200px; /* Prevent shrinking */
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
  border: 2px solid var(--color-border);
}

.media-item:hover {
  transform: scale(1.02);
  border-color: var(--accent-color);
}

/* Optional: Style scrollbar for horizontal scrolling */
.media-section::-webkit-scrollbar {
  height: 7px;
}

.media-section::-webkit-scrollbar-track {
  background: var(--color-background-mute);
  border-radius: 4px;
}

.media-section::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 4px;
}

.description-section,
.lessons-section,
.challenges-section,
.skills-section {
  margin: 1.5rem 0;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--color-heading);
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .project-modal {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .media-container {
    grid-template-columns: 1fr;
  }
}
</style>
