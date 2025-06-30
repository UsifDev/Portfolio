<template>
  <div
    class="compact-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="card-content" :class="{ hovered: isHovered }">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-description">{{ project.description }}</p>
      <div class="card-skill">
        <SkillBadgeComp
          :name="primarySkill.name"
          :highlighted="getSkill(primarySkill.name)?.isHighlighted"
        />
      </div>
    </div>

    <transition name="slide-up">
      <div v-if="isHovered" class="image-preview">
        <img :src="project.image" :alt="project.title" class="preview-image" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectsData } from "@/composables/useProjectsData.js";

const { getSkill, getProject } = useProjectsData();

const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
});

const project = computed(() => {
  return getProject(props.projectId);
});

const isHovered = ref(false);

const primarySkill = computed(() => {
  // Get the first highlighted skill if exists, otherwise first skill
  const highlighted = project.value.skills.find((skill) => skill.isHighlighted);
  return highlighted || project.value.skills[0];
});
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
.compact-card {
  position: relative;
  height: 220px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-color: var(--color-background-soft);
}

.card-content {
  padding: 1.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content.hovered {
  transform: scale(1.03);
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  text-align: left;
}

.card-description {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-skill {
  display: flex;
  justify-content: center;
}

.image-preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
