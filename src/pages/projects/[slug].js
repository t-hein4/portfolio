import { Author } from "@/components/author";
import { CoverImage } from "@/components/cover-image";
import { ProjectContent } from "@/components/project-content";
import client from "@/lib/sanity-client";
import { projectBySlug, projectsSlugs } from "@/lib/sanity-queries";

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
  let slugs = await client.fetch(projectsSlugs);

  return {
    paths: slugs.map((slug) => `/projects/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let project = await client.fetch(projectBySlug, { slug: params.slug });

  return {
    props: {
      project,
    },
  };
}
