import { Author } from "./author";
import { CoverImage } from "./cover-image";
import { ProjectCard } from "./project-card";
import { ProjectLinks } from "./project-links";
import { SanityBlock } from "./sanity-block";
import { TechStack } from "./tech-stack";

export function Project({
  title,
  author,
  content,
  cover_image,
  tech_stack,
  moreProjects,
  source_code,
  live_demo,
}) {
  return (
    <div className="container mx-auto space-y-16 py-16">
      <div className="space-y-8 px-4 2xl:px-0">
        {title && (
          <h1 className="text-center font-heading text-4xl font-medium md:text-left md:text-6xl md:font-semibold">
            {title}
          </h1>
        )}
        <div className="w-full max-w-prose">
          {author && <Author {...{ ...author }} />}
        </div>
      </div>
      <div className="shadow-lg shadow-black/20">
        {cover_image && <CoverImage cover_image={cover_image} title={title} />}
      </div>
      <div className="grid grid-flow-row justify-center gap-8 px-4 2xl:px-0">
        <div className="flex justify-between">
          {tech_stack && <TechStack {...{ tech_stack }} />}
          {source_code && live_demo && (
            <ProjectLinks source_code={source_code} live_demo={live_demo} />
          )}
        </div>
        {content && <SanityBlock value={content} />}
      </div>
      <hr />
      {moreProjects.length > 0 && (
        <div className="space-y-12">
          <h2 className="px-4 text-center font-heading text-4xl font-medium md:text-left md:text-5xl 2xl:px-0">
            More Projects
          </h2>
          <div className="space-y-32">
            {moreProjects.map((moreProject) => (
              <ProjectCard {...{ ...moreProject }} key={moreProject._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
