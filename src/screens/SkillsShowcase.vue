<template>
  <section class="skills-showcase" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <SkillBadgeComp
        v-for="skill in skills"
        :key="skill"
        :name="skill.name"
        :highlighted="skill.isHighlighted"
        clickable
        @click="openSkillModal(skill.name)"
      />
    </div>

    <SkillModalComp
      v-if="selectedSkill"
      :skillName="selectedSkill"
      @close="selectedSkill = null"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";

import { useProjectsData } from "@/composables/useProjectsData";

const { skills } = useProjectsData();

const selectedSkill = ref(null);
const openSkillModal = (skillName) => {
  selectedSkill.value = skillName;
};
</script>

<script>
import SkillBadgeComp from "@/components/SkillBadge.vue";
import SkillModalComp from "./SkillModal.vue";

export default {
  name: "SkillsShowcaseComp",
  components: {
    SkillModalComp,
    SkillBadgeComp,
  },
};
</script>

<style scoped>
.skills-showcase {
  padding: 2rem 0;
  background-color: var(--color-background-mute);
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-heading);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
