import { ProjectCard } from "@/components/project-card";
import client from "@/lib/sanity-client";
import { buildImgUrl } from "@/lib/sanity-image";
import { allProjects } from "@/lib/sanity-queries";

export default function Home({ projects }) {
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

export async function getStaticProps() {
  let projects = await client.fetch(allProjects);

  return {
    props: {
      projects,
    },
  };
}
