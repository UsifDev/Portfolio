export class ProjectsDataStore {
  static #instance = null;
  projects = [];
  skills = [];

  constructor(projects) {
    if (ProjectsDataStore.#instance) {
      return ProjectsDataStore.#instance;
    }

    this.projects = projects;
    this.processSkills();
    ProjectsDataStore.#instance = this;
  }

  static getInstance(projects = []) {
    if (!this.#instance && !projects.length) {
      throw new Error("Cannot create first instance without projects data");
    }
    return this.#instance || new ProjectsDataStore(projects);
  }

  processSkills() {
    const skillMap = new Map();

    this.projects.forEach((project) => {
      project.skills.forEach((skill) => {
        if (!skillMap.has(skill.name)) {
          skillMap.set(skill.name, {
            ...skill,
            count: 0,
            projects: [],
            isHighlighted: false,
          });
        } else {
          if (
            skill.level.toLowerCase() !=
            skillMap.get(skill.name).level.toLowerCase()
          ) {
            const a = this._convertLevelToNumber(skill.level.toLowerCase());
            const b = this._convertLevelToNumber(
              skillMap.get(skill.name).level.toLowerCase(),
            );
            if (a > b) skillMap.get(skill.name).level = skill.level;
          }
        }
        const skillData = skillMap.get(skill.name);
        skillData.count++;
        skillData.projects.push({
          id: project.id,
          date: project.date,
          title: project.title,
          highlighted: project.highlighted,
        });
      });
    });

    this.skills = Array.from(skillMap.values());
    this.skills.forEach((skill) => {
      skill.projects = skill.projects.toSorted(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
    });
    this._highlightTopSkills();
  }

  _highlightTopSkills() {
    // Sort by count then by most recent project date
    this.skills.sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return new Date(b.projects[0].date) - new Date(a.projects[0].date);
    });

    // Highlight top 4
    this.skills.forEach((skill, i) => {
      skill.isHighlighted = i < 4;
    });
  }

  _calculateSkillLevel(skillName) {
    const skillProjects = this.projects.filter((project) =>
      project.skills.some(
        (s) => s.name.toLowerCase() === skillName.toLowerCase(),
      ),
    );

    // Calculate level based on:
    // 1. Number of projects using this skill
    // 2. Explicit level declarations in projects
    // 3. Project importance (highlighted status)
    let totalLevel = 0;
    let maxPossible = 0;

    skillProjects.forEach((project) => {
      const projectSkill = project.skills.find(
        (s) => s.name.toLowerCase() === skillName.toLowerCase(),
      );
      const levelValue = this._convertLevelToNumber(
        projectSkill.level.toLowerCase(),
      );

      // Weight by project importance
      const weight = project.highlighted ? 1.5 : 1;
      totalLevel += levelValue * weight;
      maxPossible += 3 * weight; // 3 is max level number
    });

    const normalizedLevel = totalLevel / maxPossible;

    // Convert back to text level
    if (normalizedLevel > 0.8) return "expert";
    if (normalizedLevel > 0.5) return "advanced";
    if (normalizedLevel > 0.3) return "intermediate";
    return "beginner";
  }

  _convertLevelToNumber(level) {
    switch (level) {
      case "expert":
        return 3;
      case "advanced":
        return 2;
      case "intermediate":
        return 1;
      default:
        return 0.5; // beginner
    }
  }

  getRecentProjects(count = 3) {
    return [...this.projects]
      .sort(
        (a, b) =>
          this._calculateNotabilityScore(b) - this._calculateNotabilityScore(a),
      )
      .slice(0, count);
  }

  _calculateNotabilityScore(project) {
    const highlightedSkillBonus = 2;
    const skillLevelWeights = {
      expert: 3,
      advanced: 2,
      intermediate: 1,
      beginner: 0.5,
    };

    // Calculate score based on:
    // 1. Number of highlighted skills in project
    // 2. Skill levels in project
    // 3. Project's own highlighted status
    let score = project.highlighted ? 5 : 0;

    project.skills.forEach((skill) => {
      const fullSkill = this.getSkillByName(skill.name);
      if (!fullSkill) return;

      // Add bonus for highlighted skills
      if (fullSkill.isHighlighted) {
        score += highlightedSkillBonus;
      }

      // Add weighted skill level value
      score +=
        skillLevelWeights[
          this._calculateSkillLevel(fullSkill.name).toLowerCase()
        ] || 0;
    });

    // Add small recency factor (so newer projects with same score appear first)
    const daysSinceAdded =
      (new Date() - new Date(project.date)) / (1000 * 60 * 60 * 24);
    score += 1 / (1 + daysSinceAdded / 30); // Adds up to 1 point for very recent projects

    return score;
  }

  getSkillByName(name) {
    return this.skills.find((s) => s.name === name);
  }

  getProjectById(id) {
    return this.projects.find((p) => p.id === id);
  }

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }
}
