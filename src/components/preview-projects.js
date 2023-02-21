import { usePreview } from "@/lib/sanity-preview";
import Link from "next/link";
import { Projects } from "./projects";

export default function PreviewProjects({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <Projects projects={data} />
      <Link
        className="fixed bottom-0 right-0 bg-blue-500 p-6 font-bold text-white"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
