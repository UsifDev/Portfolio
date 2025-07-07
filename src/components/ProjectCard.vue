<template>
  <div class="project-card">
    <div
      v-if="project.media"
      class="image-container"
      @mouseenter="showFullImage = true"
      @mouseleave="showFullImage = false"
    >
      <img
        :src="project.media[0].url"
        :alt="project.title + ' preview image'"
        class="project-image"
        :class="{ 'full-image': showFullImage }"
        @click="openMediaViewer(0)"
      />
      <div v-if="showFullImage" class="image-overlay"></div>
    </div>

    <div class="content-section">
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="accent-separator"></div>
      <p class="project-description">{{ project.description }}</p>

      <div
        v-if="project.lessons && project.lessons.length"
        class="lessons-section"
      >
        <h4>Lessons Learned</h4>
        <ul class="lessons-list">
          <li v-for="(lesson, index) in project.lessons" :key="index">
            {{ lesson }}
          </li>
        </ul>
      </div>
      <div class="CTA">
        <p class="btn" @click="openProjectModal">View Details</p>
      </div>
    </div>

    <div class="skills-section">
      <SkillBadgeComp
        v-for="skill in displayedSkills"
        :key="skill.name"
        :name="skill.name"
        :highlighted="getSkill(skill.name)?.isHighlighted"
        clickable
        @open-project="openProjectModal"
      />
    </div>
  </div>

  <MediaViewerComp
    v-if="showViewer"
    :media="project.media"
    :initial-index="currentMediaIndex"
    @close="showViewer = false"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { getSkill } = useProjectsData();

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["details-click"]);

const openProjectModal = () => {
  emit("details-click", props.project);
};

const showFullImage = ref(false);

// Limit number of skills displayed based on card height
const displayedSkills = computed(() => props.project.skills.slice(0, 5));

const showViewer = ref(false);
const currentMediaIndex = ref(0);

const openMediaViewer = (index) => {
  currentMediaIndex.value = index;
  showViewer.value = true;
};
</script>

<script>
import SkillBadgeComp from "./SkillBadge.vue";
import MediaViewerComp from "@/screens/MediaViewer.vue";

export default {
  name: "ProjectCardComp",
  components: {
    SkillBadgeComp,
    MediaViewerComp,
  },
};
</script>

<style scoped>
.project-card {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background: white;
  color: var(--color-text);
  position: relative;
}

.image-container {
  flex: 0 0 280px;
  position: relative;
  overflow: hidden;
  background: var(--accent-color);
  padding: 8px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.project-image.full-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content-section {
  flex: 1;
  padding: 3% 2rem; /* Vertical padding as percentage */
  display: flex;
  gap: 1vh;
  flex-direction: column;
  justify-content: space-between; /* Distributes space evenly */
}

.skills-section {
  flex: 0 0 200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
}

.project-title {
  font-size: 1.6rem;
  text-align: center;
  color: var(--accent-color);
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.lessons-section h4 {
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.lessons-list {
  padding-left: 1.2rem;
}

.lessons-list li {
  margin-bottom: 0.5rem;
  line-height: 2.4vh;
}

.CTA {
  margin-top: auto; /* Pushes to bottom */
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;
}

.accent-separator {
  height: 3px;
  background: var(--accent-color);
  margin: 0.3rem 17rem 0.3rem 17rem;
  border-radius: 3px;
}

@media (max-width: 1200px) {
  .project-card {
    flex-direction: column;
  }

  .image-container {
    flex: 0 0 200px;
  }

  .skills-section {
    flex-direction: row;
    flex-wrap: wrap;
    border-left: none;
    border-top: 1px solid var(--color-border);
  }
}
</style>
