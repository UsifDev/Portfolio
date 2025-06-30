import { ref, computed } from "vue";
import { ProjectsData, projectsData } from "@/assets/data.js";

const portfolio = ref(ProjectsData.getInstance(projectsData));

export function useProjectsData() {
  if (!portfolio.value) {
    portfolio.value = ProjectsData.getInstance(projectsData);
  }

  return {
    getSkill: (name) => portfolio.value.getSkillByName(name),
    getProject: (id) => portfolio.value.getProjectById(id),
    skills: computed(() => portfolio.value.getSkills()),
    highlightedSkills: computed(() =>
      portfolio.value.getSkills().filter((s) => s.isHighlighted)
    ),
    recentProjects: computed(() =>
      portfolio.value
        .getProjects()
        .toSorted((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    ),
    otherProjects: computed(() =>
      portfolio.value
        .getProjects()
        .toSorted((a, b) => new Date(b.date) - new Date(a.date))
        .slice(3, 9)
    ),
  };
}
