import Link from "next/link";
import { CoverImage } from "./cover-image";
import { ProjectLinks } from "./project-links";
import { TechStack } from "./tech-stack";
export function ProjectCard(project) {
  const {
    cover_image,
    title,
    slug,
    tech_stack,
    source_code,
    live_demo,
    excerpt,
  } = project;

  return (
    <div className="grid gap-y-12 pb-16">
      <CardImage image={cover_image} title={title} slug={slug} />
      <div className="grid items-start justify-center gap-y-8 px-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-12 xl:px-0">
        <CardHeading slug={slug} title={title} />
        <div className="flex items-center justify-between md:self-end">
          <CardActions
            tech_stack={tech_stack}
            source_code={source_code}
            live_demo={live_demo}
          />
        </div>
        <div className="md:col-start-2 md:row-span-full">
          <CardExcerpt excerpt={excerpt} />
        </div>
      </div>
    </div>
  );
}

function CardActions({ tech_stack, source_code, live_demo }) {
  return (
    <>
      <TechStack tech_stack={tech_stack} />
      <ProjectLinks source_code={source_code} live_demo={live_demo} />
    </>
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

function CardHeading({ slug, title }) {
  return (
    <Link href={`/projects/${slug}`} className="hover:underline">
      <h2 className="font-heading text-3xl font-bold">{title}</h2>
    </Link>
  );
}

function CardExcerpt({ excerpt }) {
  return <p className="font-primary font-light">{excerpt}</p>;
}
