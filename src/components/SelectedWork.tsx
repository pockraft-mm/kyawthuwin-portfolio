import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal>
      <div className="project-copy">
        <div className="project-kicker">
          <span>{project.category}</span><span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.technologies?.length ? <p>{project.technologies.join(' · ')}</p> : null}
        {project.links?.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a className="text-link" href={link.url} key={link.url} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function SelectedWork({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="work section-border" id="work" aria-labelledby="work-title" data-reveal>
      <div className="container">
        <SectionHeading label="Selected Work" title="Recent projects" id="work-title" />
        <div className="projects">
          {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </div>
    </section>
  );
}
