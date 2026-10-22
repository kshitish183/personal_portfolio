import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group overflow-hidden border border-white/15 bg-panel shadow-comic">
      <div className={`project-preview project-preview-${project.accent}`} aria-label={`${project.title} interface preview`}>
        <div className="preview-window">
          <div className="preview-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-body">
            <div>
              <p className="font-display text-4xl font-black uppercase text-paper/90">{project.badge}</p>
              <p className="mt-2 text-xs text-paper/70">{project.category}</p>
            </div>
            <div className="preview-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="font-mono text-xs uppercase text-action">{project.category}</p>
        <h3 className="font-display text-3xl font-black uppercase text-paper">{project.title}</h3>
        <p className="mt-3 text-paper/75">{project.description}</p>

        <dl className="mt-5 grid gap-3 text-sm leading-6 text-paper/75">
          <div>
            <dt className="font-mono text-xs uppercase text-action">Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-action">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase text-action">Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="border border-action/60 px-3 py-1 text-xs uppercase text-action">
              {item}
            </span>
          ))}
        </div>
        <ul className="mt-5 grid gap-2 text-sm text-paper/70">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-2 w-2 bg-action" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="icon-link" href={project.demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Live
          </a>
          <a className="icon-link" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={18} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
