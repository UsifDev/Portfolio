<template>
  <div class="project-card">
    <div
      class="image-container"
      @mouseenter="showFullImage = true"
      @mouseleave="showFullImage = false"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="project-image"
        :class="{ 'full-image': showFullImage }"
      />
      <div v-if="showFullImage" class="image-overlay"></div>
    </div>

    <div class="content-section">
      <h3 class="project-title">{{ project.title }}</h3>
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
      <button class="btn" @click="openProjectModal">View Details</button>
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
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { getSkill } = useProjectsData();

const emit = defineEmits(["details-click"]);

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const openProjectModal = () => {
  emit("details-click", props.project);
};

const showFullImage = ref(false);

// Limit number of skills displayed based on card height
const displayedSkills = computed(() => props.project.skills.slice(0, 5));
</script>

<script>
import SkillBadgeComp from "./SkillBadge.vue";

export default {
  name: "ProjectCardComp",
  components: {
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 14px;
}
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
  padding: 2rem;
  position: relative;
}

.content-section::after {
  content: "";
  position: absolute;
  right: 0;
  top: 2rem;
  bottom: 2rem;
  width: 1px;
  background: var(--color-border);
}

.skills-section {
  flex: 0 0 200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.lessons-section h4 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.lessons-list {
  padding-left: 1.2rem;
}

.lessons-list li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

@media (max-width: 900px) {
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
