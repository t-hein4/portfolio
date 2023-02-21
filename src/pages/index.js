import { ProjectCard } from "@/components/project-card";
import client from "@/lib/sanity-client";
import { buildImgUrl } from "@/lib/sanity-image";
import Image from "next/image";
import Link from "next/link";

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
  let projects = await client.fetch(
    `*[_type == "project"] 
    { _id, title, date, tech_stack[]->{_id, name}, excerpt, cover_image, author->{name, picture}, "slug": slug.current}`
  );

  let authors = await client.fetch(
    `*[_type == "author" && name == 'Thein Hein'] { name }`
  );

  projects = projects.map((project) => {
    return {
      ...project,
      cover_image: buildImgUrl(project.cover_image),
      author: {
        ...project.author,
        picture: buildImgUrl(project.author.picture),
      },
    };
  });

  return {
    props: {
      projects,
    },
  };
}
