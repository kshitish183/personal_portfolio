import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { projectCategories, projects } from "../../data/projects";
import type { ProjectCategory } from "../../data/projects";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";

type ProjectFilter = ProjectCategory | "All";

function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filters: ProjectFilter[] = ["All", ...projectCategories];
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <Section id="projects" title={t("sections.works")}>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            className={`filter-chip ${activeFilter === filter ? "filter-chip-active" : ""}`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter === "All" ? t("projects.all") : filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
