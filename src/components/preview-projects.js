import { usePreview } from "@/lib/sanity-preview";
import Link from "next/link";
import { Projects } from "./projects";

export default function PreviewProjects({ query }) {
  const projects = usePreview(null, query);

  return (
    <>
      <Projects projects={projects} />
      <Link
        className="fixed bottom-0 right-0 bg-black p-6 font-bold text-white"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
