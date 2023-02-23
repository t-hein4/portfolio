import { ProjectCard } from "./project-card";

export function Projects({ projects }) {
  return (
    projects.length > 0 && (
      <div className="space-y-24">
        {projects.map((project, idx) => (
          <ProjectCard {...{ ...project, idx }} key={project._id} />
        ))}
      </div>
    )
  );
}
