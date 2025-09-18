<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="project-modal">
      <div class="modal-header">
        <h3 class="project-title" :class="{ highlighted: project.highlighted }">
          {{ project.title }}
        </h3>
        <span v-if="showHighlightBadge" class="highlight-badge">Featured</span>
        <button class="close-button" @click="closeModal">×</button>
      </div>
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
        <h4>Description</h4>
        <p>{{ project.description }}</p>
      </div>

      <div
        class="lessons-section"
        v-if="project.lessons && project.lessons.length"
      >
        <h4>Lessons Learned</h4>
        <ul>
          <li
            v-for="(lesson, index) in project.lessons"
            :key="`lesson-${index}`"
          >
            {{ lesson }}
          </li>
        </ul>
      </div>

      <div class="challenges-section" v-if="project.challenge">
        <h4>Challenges Overcome</h4>
        <p>{{ project.challenge }}</p>
      </div>

      <div class="accent-separator"></div>

      <div class="skills-section">
        <h4>Skills Applied</h4>
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
import { ref, computed } from "vue";
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
// Only show badge if title is short
const showHighlightBadge = computed(() => {
  return project.value.highlighted && (project.value.title?.length ?? 0) <= 32;
});

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
  padding: 2.5rem 2rem;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow: visible;
  overflow-y: auto;
  overflow-x: visible;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.project-title {
  flex: 1 1 auto;
  margin-bottom: 0;
  color: var(--color-heading);
  position: relative;
  padding-right: 0;
  word-break: break-word;
  overflow-wrap: break-word;
}
.project-title.highlighted {
  color: var(--accent-color);
}

.highlight-badge {
  background: var(--accent-color);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

.close-button {
  font-size: 2.2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  margin-left: 0.5rem;
  margin-right: 0;
  padding: 0 0.5rem;
}

.project-title {
  color: var(--color-heading);
  position: relative;
  padding-right: 2rem;
}

.project-title.highlighted {
  color: var(--accent-color);
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
  overflow-x: auto;
}

.media-container {
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  margin-top: 1rem;
  width: max-content;
  min-width: 100%;
}

.media-item {
  width: 200px;
  height: 150px;
  min-width: 200px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition:
    transform 0.2s,
    border-color 0.2s;
  border: 2px solid var(--color-border);
}

.media-item:hover {
  transform: scale(1.02);
  border-color: var(--accent-color);
}

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

h4 {
  margin-bottom: 0.8rem;
  color: var(--color-heading);
}

li {
  margin-bottom: 0.5rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding-top: 1rem;
}

@media (orientation: landscape) and (max-width: 1200px) {
  .modal-overlay {
    align-items: flex-start;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
  .project-modal {
    align-self: center;
    max-width: 1800px;
    max-height: 80vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
  }
  .modal-header {
    gap: 1rem;
  }
  .project-title {
    padding-top: 0.5rem;
  }
}

@media (orientation: portrait) and (max-width: 900px) {
  .modal-header {
    gap: 0.5rem;
  }
  .project-title {
    padding-top: 0.2rem;
  }
  .highlight-badge {
    margin-left: 0.3rem;
  }
  .close-button {
    margin-left: 0.3rem;
    padding: 0 0.3rem;
  }
  .media-container {
    grid-template-columns: 1fr;
  }
}
</style>
