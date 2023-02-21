import { Author } from "@/components/author";
import { CoverImage } from "@/components/cover-image";
import { ProjectCard } from "@/components/project-card";
import { ProjectContent } from "@/components/project-content";
import client from "@/lib/sanity-client";
import { query } from "@/lib/sanity-queries";

export default function Project({ project, moreProjects }) {
  const { title, author, cover_image, date, content } = project;
  return (
    <div className="container mx-auto space-y-16 py-16">
      <div className="space-y-8 px-4 md:px-0">
        <h1 className="text-center text-4xl font-medium md:text-left md:text-6xl md:font-semibold">
          {title}
        </h1>
        <div className="w-full max-w-prose">
          <Author {...{ ...author }} />
        </div>
      </div>
      <CoverImage cover_image={cover_image} title={title} />
      <div className="grid grid-flow-row justify-center gap-8 px-4 md:px-0">
        <p className="w-full max-w-prose">{date}</p>
        <ProjectContent content={content} />
      </div>
      <hr />
      <div className="space-y-12">
        <h2 className="px-4 text-center text-4xl font-medium md:px-0 md:text-left md:text-5xl">
          More Projects
        </h2>
        {moreProjects.map((moreProject) => (
          <ProjectCard {...{ ...moreProject }} key={moreProject._id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let slugs = await client.fetch(query.projectsSlugs);

  return {
    paths: slugs.map((slug) => `/projects/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let project = await client.fetch(query.projectBySlug, { slug: params.slug });

  let moreProjects = await client.fetch(query.moreProjects, {
    slug: params.slug,
  });

  return {
    props: {
      project,
      moreProjects,
    },
  };
}
