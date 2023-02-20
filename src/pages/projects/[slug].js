import client from "@/lib/sanity-client";
import { buildImgUrl } from "@/lib/sanity-image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function Project({ project }) {
  return (
    <div className="container mx-auto space-y-16 py-16">
      <div className="space-y-8">
        <h1 className="text-6xl font-semibold">{project.title}</h1>
        <div className="flex w-full max-w-prose items-center gap-8">
          <Image
            width={56}
            height={56}
            alt={`${project.author.name}'s picture`}
            src={project.author.picture}
            className="h-14 w-14 rounded-full grayscale"
          />
          <span className="text-lg font-bold">{project.author.name}</span>
        </div>
      </div>
      <Image
        width={2000}
        height={1000}
        alt={`Cover image for ${project.title}`}
        src={project.cover_image}
      />
      <div className="grid grid-flow-row justify-center gap-8">
        <p className="w-full max-w-prose text-lg">{project.date}</p>
        <div className="content max-w-prose">
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let projects = await client.fetch(
    `*[_type == "project"] { "slug": slug.current }`
  );

  let paths = projects.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let projects = await client.fetch(
    `*[_type == "project" && slug.current == "${params.slug}"] { content, title, date, excerpt, cover_image, "author": author->{name, picture} }`
  );

  let project = {
    ...projects[0],
    cover_image: buildImgUrl(projects[0].cover_image),
    author: {
      ...projects[0].author,
      picture: buildImgUrl(projects[0].author.picture),
    },
  };
  return {
    props: {
      project,
    },
  };
}
