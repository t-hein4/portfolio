import client from "@/lib/sanity-client";
import { query } from "@/lib/sanity-queries";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { Project } from "@/components/project";
const PreviewProject = lazy(() => import("@/components/preview-project"));

export default function ProjectPage({
  preview,
  queryParams,
  project,
  moreProjects,
}) {
  return preview ? (
    <PreviewSuspense fallback="loading">
      <PreviewProject
        query={query.projectAndMoreProjects}
        queryParams={queryParams}
      />
    </PreviewSuspense>
  ) : (
    <Project {...{ ...project }} moreProjects={moreProjects} />
  );
}

export async function getStaticPaths() {
  let slugs = await client.fetch(query.projectsSlugs);

  return {
    paths: slugs.map((slug) => `/projects/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  let queryParams = { slug: params.slug };
  let { project, moreProjects } = await client.fetch(
    query.projectAndMoreProjects,
    queryParams
  );

  return {
    props: {
      preview,
      queryParams,
      project,
      moreProjects,
    },
  };
}
