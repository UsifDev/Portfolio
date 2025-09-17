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
  </section>
</template>

<script setup>
import { useProjectsData } from "@/composables/useProjectsData";
const { skills, getProject } = useProjectsData();

const emit = defineEmits(["details-click"]);
const openProjectModal = (project) => {
  emit("details-click", getProject(project.id));
};
</script>

<script>
import SkillBadgeComp from "@/components/SkillBadge.vue";

export default {
  name: "SkillsShowcaseComp",
  components: {
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.skills-showcase {
  padding: 3rem 0;
  background: var(--bg-color);
  padding-bottom: 100px;
  max-width: 1600px;
  width: 100%;
  justify-self: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
  margin-bottom: 2.5rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2.3em;
  height: 3px;
  background: var(--accent-color);
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
