import { ProjectCard } from "./project-card";

export function Projects({ projects }) {
  return (
    <>
      {projects.length > 0 && (
        <div className="container mx-auto py-16">
          {projects.map((project) => (
            <ProjectCard {...{ ...project }} key={project._id} />
          ))}
        </div>
      )}
    </>
  );
}