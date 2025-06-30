<template>
  <section class="other-works">
    <h2 class="section-title">Other Works</h2>
    <div class="works-grid">
      <CompactProjectCardComp
        v-for="project in otherProjects"
        :key="project.id"
        :project-id="project.id"
      />
    </div>
  </section>
</template>

<script setup>
import { useProjectsData } from "@/composables/useProjectsData";
const { otherProjects } = useProjectsData();
</script>

<script>
import CompactProjectCardComp from "@/components/CompactProjectCard.vue";
export default {
  name: "OtherWorksComp",
  components: {
    CompactProjectCardComp,
  },
};
</script>

<style scoped>
.other-works {
  padding: 2rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-heading);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
