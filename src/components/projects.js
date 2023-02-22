import { ProjectCard } from "./project-card";

export function Projects({ projects }) {
  return (
    <>
      {projects.length > 0 && (
        <main className="mx-auto my-16 max-w-6xl space-y-24">
          {projects.map((project) => (
            <ProjectCard {...{ ...project }} key={project._id} />
          ))}
        </main>
      )}
    </>
  );
}
