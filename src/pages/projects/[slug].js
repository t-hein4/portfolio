import { Author } from "@/components/author";
import { CoverImage } from "@/components/cover-image";
import { ProjectContent } from "@/components/project-content";
import client from "@/lib/sanity-client";
import { buildImgUrl } from "@/lib/sanity-image";

export default function Project({ project }) {
  const { title, author, cover_image, date, content } = project;
  return (
    <div className="container mx-auto space-y-16 py-16">
      <div className="space-y-8">
        <h1 className="text-6xl font-semibold">{title}</h1>
        <div className="w-full max-w-prose">
          <Author {...{ ...author }} />
        </div>
      </div>
      <CoverImage cover_image={cover_image} title={title} />
      <div className="grid grid-flow-row justify-center gap-8">
        <p className="w-full max-w-prose text-lg">{date}</p>
        <ProjectContent content={content} />
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
    `*[_type == "project" && slug.current == "${params.slug}"] { content, title, date, excerpt, cover_image, author->{name, picture} }`
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
