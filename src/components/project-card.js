import Link from "next/link";
import { Author } from "./author";
import { CoverImage } from "./cover-image";
import { ProjectLinks } from "./project-links";
import { TechStack } from "./tech-stack";
export function ProjectCard(project) {
  return (
    <div>
      <CardImage
        image={project.cover_image}
        title={project.title}
        slug={project.slug}
      />
      <CardBody {...{ ...project }} />
    </div>
  );
}

function CardImage({ slug, image, title }) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="cursor-pointer shadow-lg shadow-black/20 transition-all duration-150 ease-in-out hover:shadow-xl hover:shadow-black/20">
        <CoverImage cover_image={image} title={title} />
      </div>
    </Link>
  );
}

function CardBody({
  slug,
  title,
  tech_stack,
  author,
  excerpt,
  date,
  source_code,
  live_demo,
}) {
  return (
    <div className="grid auto-cols-fr gap-x-8 gap-y-4 py-16 px-4 md:grid-flow-col 2xl:px-0">
      <div className="space-y-6">
        <Link href={`/projects/${slug}`}>
          <h2 className="font-heading text-3xl font-medium hover:underline md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between">
          <TechStack {...{ tech_stack }} />
          <ProjectLinks source_code={source_code} live_demo={live_demo} />
        </div>
      </div>
      <div className="space-y-6">
        <p className="max-w-prose">{excerpt}</p>
        <Author name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
