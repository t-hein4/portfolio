import client from "@/lib/sanity-client";
import { query } from "@/lib/sanity-queries";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { Project } from "@/components/project";
import { Loading } from "@/components/loading";
import Head from "next/head";
import { useRouter } from "next/router";
import clsx from "clsx";
const PreviewProject = lazy(() => import("@/components/preview-project"));

export default function ProjectPage({
  preview,
  queryParams,
  project,
  moreProjects,
}) {
  const router = useRouter();
  return preview ? (
    <PreviewSuspense fallback={<Loading />}>
      <PreviewProject
        query={query.projectAndMoreProjects}
        queryParams={queryParams}
      />
    </PreviewSuspense>
  ) : (
    <>
      <Head>
        <title>Thein Hein | {project.title}</title>
      </Head>
      <div
        className={clsx(
          "my-16 mx-auto",
          router.asPath !== "/studio" && "max-w-6xl"
        )}
      >
        <Project {...{ ...project }} moreProjects={moreProjects} />
      </div>
    </>
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
