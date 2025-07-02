import { ref, computed } from "vue";
import { projectsData } from "@/assets/data.js";
import { ProjectsDataStore } from "@/assets/ProjectsData.js";

const portfolio = ref(ProjectsDataStore.getInstance(projectsData));

export function useProjectsData() {
  if (!portfolio.value) {
    portfolio.value = ProjectsDataStore.getInstance(projectsData);
  }

  return {
    getSkill: (name) => portfolio.value.getSkillByName(name),
    getProject: (id) => portfolio.value.getProjectById(id),
    skills: computed(() => portfolio.value.getSkills()),
    highlightedSkills: computed(() =>
      portfolio.value.getSkills().filter((s) => s.isHighlighted)
    ),
    recentProjects: computed(() => portfolio.value.getRecentProjects(3)),
    otherProjects: computed(() => {
      const recentIds = portfolio.value.getRecentProjects(3).map((p) => p.id);
      return [...portfolio.value.projects]
        .filter((p) => !recentIds.includes(p.id))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);
    }),
  };
}
