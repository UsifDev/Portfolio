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
    </div>

    <div class="skills-section">
      <SkillBadgeComp
        v-for="skill in displayedSkills"
        :key="skill.name"
        :name="skill.name"
        :highlighted="getSkill(skill.name)?.isHighlighted"
        clickable
        @click="openSkillModal(skill.name)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";
const { getSkill } = useProjectsData();

const emit = defineEmits(["skill-click"]);

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const openSkillModal = (skillName) => {
  emit("skill-click", skillName);
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
.project-card {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 1rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-soft);
  position: relative;
}

.image-container {
  flex: 0 0 250px;
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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
  padding: 1.5rem;
  min-height: 300px;
}

.skills-section {
  flex: 0 0 180px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-left: 1px solid var(--color-border);
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
