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
      <div className="grid auto-cols-fr grid-flow-col gap-x-8 py-16">
        <div className="space-y-6">
          <h2 className="text-5xl">{title}</h2>
          <span className="block text-lg">{date}</span>
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
