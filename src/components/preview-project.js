import { usePreview } from "@/lib/sanity-preview";
import Link from "next/link";
import { Project } from "./project";

export default function PreviewProject({ query, queryParams }) {
  const { project, moreProjects } = usePreview(null, query, queryParams);
  return (
    <>
      <Project {...{ ...project }} moreProjects={moreProjects} />
      <Link
        className="fixed bottom-0 right-0 bg-black p-6 font-bold text-white"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
