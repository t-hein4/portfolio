import { Projects } from "@/components/projects";
import client from "@/lib/sanity-client";
import { query } from "@/lib/sanity-queries";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
const PreviewProjects = lazy(() => import("@/components/preview-projects"));
export default function Home({ projects, preview }) {
  return (
    <>
      {preview ? (
        <>
          <PreviewSuspense fallback="loading">
            <PreviewProjects query={query.allProjects} />
          </PreviewSuspense>
        </>
      ) : (
        <Projects projects={projects} />
      )}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return {
      props: {
        preview,
      },
    };
  }
  let projects = await client.fetch(query.allProjects);

  return {
    props: {
      preview,
      projects,
    },
  };
}
