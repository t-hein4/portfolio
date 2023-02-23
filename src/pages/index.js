import { Loading } from "@/components/loading";
import { Projects } from "@/components/projects";
import client from "@/lib/sanity-client";
import { query } from "@/lib/sanity-queries";
import clsx from "clsx";
import { PreviewSuspense } from "next-sanity/preview";
import Head from "next/head";
import { useRouter } from "next/router";
import { lazy } from "react";
import { useEffect, useState } from "react";
import { Banner } from "@/components/banner";
const PreviewProjects = lazy(() => import("@/components/preview-projects"));
export default function Home({ projects, preview }) {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const me = await client.fetch(query.aboutMe);
      setData(me);
    })();
  }, []);

  return preview ? (
    <PreviewSuspense fallback={<Loading />}>
      <PreviewProjects query={query.allProjects} />
    </PreviewSuspense>
  ) : (
    <>
      <Head>
        <title>Thein Hein</title>
      </Head>
      <Banner {...data} />
      <div
        className={clsx(
          "my-16 mx-auto",
          router.asPath !== "/studio" && "max-w-6xl"
        )}
      >
        <Projects projects={projects} />
      </div>
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
