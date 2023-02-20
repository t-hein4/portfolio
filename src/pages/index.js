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
            <div key={project._id}>
              <Link href={`/projects/${project.slug}`}>
                <Image
                  width={2000}
                  height={1000}
                  alt={`Cover image for ${project.title}`}
                  src={project.cover_image}
                />
              </Link>
              <div className="grid auto-cols-fr grid-flow-col gap-x-8 py-16">
                <div className="space-y-6">
                  <h2 className="text-5xl">{project.title}</h2>
                  <span className="block text-lg">{project.date}</span>
                </div>
                <div className="space-y-6">
                  <p className="max-w-prose">{project.excerpt}</p>
                  <div className="flex items-center gap-8">
                    <Image
                      width={56}
                      height={56}
                      alt={`${project.author.name}'s picture`}
                      src={project.author.picture}
                      className="h-14 w-14 rounded-full grayscale"
                    />
                    <span className="text-lg font-bold">
                      {project.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  let projects = await client.fetch(
    `*[_type == "project"] 
    { _id, title, date, excerpt, cover_image, "author": author->{name, picture}, "slug": slug.current}`
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
