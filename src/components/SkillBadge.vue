<!-- SkillBadge.vue -->
<template>
  <div class="skill-badge-container">
    <button
      class="skill-badge"
      :class="{ highlighted }"
      @mouseenter="showTooltip = true"
      @mouseleave="hideTooltip()"
      @click="openProjectModal(primaryProject)"
    >
      {{ name }}
    </button>

    <div
      v-if="showTooltip && skillData"
      class="skill-tooltip"
      @mouseenter="keepTooltipVisible = true"
      @mouseleave="hideTooltip()"
    >
      <div class="tooltip-container">
        <div v-if="level != null" class="tooltip-section">
          <span class="tooltip-label">Level: </span>
          <span>{{ formattedLevel }}</span>
          <br /><br />
        </div>

        <div class="projects-list">
          <div
            class="project-item"
            v-for="project in sortedProjects"
            :key="project.id"
          >
            <a
              v-if="project.id === primaryProject?.id"
              href="#"
              class="primary-project"
              @click.prevent="openProjectModal(primaryProject)"
            >
              {{ project.title }} ({{ formatDate(project.date) }})
            </a>
            <span v-else>
              {{ project.title }} ({{ formatDate(project.date) }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useProjectsData } from "@/composables/useProjectsData";

const { getProject, getSkill } = useProjectsData();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  level: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["click", "open-project"]);

const showTooltip = ref(false);
const keepTooltipVisible = ref(false);
const hideTimeout = ref(null);

const skillData = computed(() => getSkill(props.name));

const formattedLevel = computed(() => {
  return props.level?.charAt(0).toUpperCase() + props.level?.slice(1);
});

const sortedProjects = computed(() => {
  if (!skillData.value?.projects) return [];
  return [...skillData.value.projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
});

const primaryProject = computed(() => {
  return (
    sortedProjects.value.find(
      (project) => getProject(project.id)?.highlighted
    ) || sortedProjects.value[0]
  );
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

const openProjectModal = (project) => {
  emit("open-project", project);
  hideTooltip();
};

const hideTooltip = () => {
  keepTooltipVisible.value = false;
  hideTimeout.value = setTimeout(() => {
    if (!keepTooltipVisible.value) {
      showTooltip.value = false;
    }
  }, 30);
};
</script>

<script>
export default {
  name: "SkillBadgeComp",
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;

  width: 280px;
  background: white;
  color: var(--color-text);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  border: 1px solid var(--color-border);
}

.skill-tooltip {
  width: 120px;
  bottom: 105%;
  left: -50%;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1000;
}

.project-item {
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--color-border-mute);
}

.project-item:last-child {
  border-bottom: none;
}

.primary-project {
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  color: var(--accent-color);
  font-weight: 600;
  cursor: pointer;
  border-top: 1px solid var(--color-border);
  font-size: 1rem;
  line-height: 1.6;
}

.primary-project:hover {
  text-decoration: underline;
}

.projects-list::-webkit-scrollbar {
  width: 6px;
}

.projects-list::-webkit-scrollbar-track {
  background: var(--color-background-mute);
}
@media screen and (orientation: landscape), (min-width: 900px) {
  .project-item,
  .primary-project,
  .skill-badge {
    font-size: 1.1rem;
    line-height: 1.7;
  }
}

.projects-list::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 3px;
}

.skill-badge-container {
  position: relative;
  display: inline-block;
  overflow: visible;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  margin: 0.2rem;
  border-radius: 1rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border: none;
  font-size: 1rem;
  line-height: 1.6;
  transition: all 0.2s ease;
  cursor: pointer;
}

.skill-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.highlighted {
  background: linear-gradient(145deg, #eb4a4a, #d93838);
  color: rgb(255, 255, 255);
  position: relative;
  overflow: hidden;
}

.highlighted::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 45%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: rotate(30deg) translate(-30%, -30%);
  }
  100% {
    transform: rotate(30deg) translate(30%, 30%);
  }
}
</style>
