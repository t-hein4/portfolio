import Link from "next/link";
import { Author } from "./author";
import { CoverImage } from "./cover-image";

export function ProjectCard({
  slug,
  title,
  cover_image,
  date,
  tech_stack,
  excerpt,
  author,
}) {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <CoverImage cover_image={cover_image} title={title} />
      </Link>
      <div className="grid auto-cols-fr gap-x-8 py-16 px-4 md:grid-flow-col md:px-0">
        <div className="space-y-6">
          <Link href={`/projects/${slug}`}>
            <h2 className="text-2xl font-medium hover:underline md:text-3xl">
              {title}
            </h2>
          </Link>
          <span className="block">{date}</span>
          <div className="space-x-6">
            {tech_stack.map((tech) => (
              <span key={tech._id}>{tech.name}</span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <p className="max-w-prose">{excerpt}</p>
          <Author name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
}
