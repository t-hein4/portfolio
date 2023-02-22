import { ProjectCard } from "./project-card";

export function Projects({ projects }) {
  return (
    <>
      {projects.length > 0 && (
        <div className="space-y-24">
          {projects.map((project) => (
            <ProjectCard {...{ ...project }} key={project._id} />
          ))}
        </div>
      )}
    </>
  );
}
