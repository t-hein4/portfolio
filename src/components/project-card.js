import Link from "next/link";
import { Author } from "./author";
import { CoverImage } from "./cover-image";
import { TechStack } from "./tech-stack";
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
    <>
      <CardImage image={cover_image} title={title} slug={slug} />
      <CardBody
        slug={slug}
        title={title}
        tech_stack={tech_stack}
        author={author}
        excerpt={excerpt}
        date={date}
      />
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

function CardBody({ slug, title, tech_stack, author, excerpt, date }) {
  return (
    <div className="grid auto-cols-fr gap-x-8 gap-y-4 py-16 px-4 md:grid-flow-col 2xl:px-0">
      <div className="space-y-6">
        <Link href={`/projects/${slug}`}>
          <h2 className="font-heading text-3xl font-medium hover:underline md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Link>
        <TechStack {...{ tech_stack }} />
      </div>
      <div className="space-y-6">
        <p className="max-w-prose">{excerpt}</p>
        <Author name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
