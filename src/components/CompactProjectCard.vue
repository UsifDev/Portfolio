<template>
  <div
    class="compact-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="openProjectModal"
  >
    <div class="card-content" :class="{ hovered: isHovered }">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-description">
        {{ truncateDescription(project.description) }}
      </p>
      <div class="card-skill">
        <SkillBadgeComp
          :name="primarySkill.name"
          :highlighted="getSkill(primarySkill.name)?.isHighlighted"
        />
      </div>
    </div>

    <transition name="slide-up">
      <div v-if="isHovered" class="image-preview">
        <div class="accent-bar"></div>
        <img
          :src="project.media[0].url"
          :alt="project.title + ' preview image'"
          class="preview-image"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData.js";

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

const isHovered = ref(false);

const primarySkill = computed(() => {
  if (!props.project.skills?.length) return { name: "No skills attached" };

  // Score each skill based on importance factors
  const scoredSkills = props.project.skills.map((skill) => {
    const fullSkill = getSkill(skill.name);
    if (!fullSkill) return { ...skill, score: 0 };

    const levelWeights = {
      expert: 4,
      advanced: 3,
      intermediate: 2,
      beginner: 1,
    };

    let score = 0;

    // 1. Skill level weight (expert > beginner)
    score += levelWeights[skill.level] || 1;

    // 2. Highlighted skill bonus
    if (fullSkill.isHighlighted) score += 3;

    // 3. Frequency bonus (used in many projects)
    score += Math.min(fullSkill.count / 5, 3); // Max +3 for very common skills

    // 4. Recent usage bonus (projects using this skill)
    const daysSinceLastUsed =
      (new Date() - new Date(fullSkill.projects[0].date)) /
      (1000 * 60 * 60 * 24);
    score += 2 / (1 + daysSinceLastUsed / 30); // +0 to +2 based on recency

    return {
      ...skill,
      score,
    };
  });

  // Return highest scored skill
  return scoredSkills.sort((a, b) => b.score - a.score)[0];
});

const truncateDescription = (desc) => {
  return desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
};
</script>

<script>
import SkillBadgeComp from "./SkillBadge.vue";
export default {
  name: "CompactProjectCardComp",
  components: {
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.compact-card-container {
  padding: 0.5rem;
  position: relative;
}

.compact-card {
  position: relative;
  height: 220px;
  width: 100%;
  border-radius: 8px;
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  z-index: 1;
  cursor: pointer;
}

.compact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.card-content {
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background-color: white;
  border-radius: 8px;
}

.card-content.hovered {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card-title {
  margin-bottom: 0.8rem;
  text-align: left;
  color: var(--color-heading);
}

.card-description {
  flex: 1;
  margin-bottom: 0.8rem;
  text-align: left;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-skill {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.image-preview {
  position: absolute;
  top: -6px;
  left: 0;
  width: 100%;
  height: calc(100% + 6px);
  background: var(--accent-color);
  border-radius: 8px;
  z-index: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--accent-color);
}

.preview-image {
  width: 100%;
  height: calc(100% - 6px);
  margin-top: 6px;
  object-fit: cover;
  object-position: center top;
}

/* Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@media screen and (orientation: landscape) and (min-width: 900px) {
  .card-title,
  .card-description {
    font-size: 1.1rem;
    line-height: 1.7;
  }
}
</style>
