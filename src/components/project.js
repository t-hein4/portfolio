import { CoverImage } from "./cover-image";
import { ProjectLinks } from "./project-links";
import { Projects } from "./projects";
import { SanityBlock } from "./sanity-block";
import { TechStack } from "./tech-stack";

export function Project({
  title,
  content,
  cover_image,
  tech_stack,
  moreProjects,
  source_code,
  live_demo,
}) {
  return (
    <>
      <div className="space-y-16">
        {title && <ProjectTitle title={title} />}
        {cover_image && <ProjectImage image={cover_image} title={title} />}
        <ProjectActions
          tech_stack={tech_stack}
          source_code={source_code}
          live_demo={live_demo}
        />
        {content && (
          <div className="flex justify-center px-4 xl:px-0">
            <SanityBlock value={content} />
          </div>
        )}
        <hr />
        {moreProjects.length > 0 && (
          <MoreProjects moreProjects={moreProjects} />
        )}
      </div>
    </>
  );
}

function ProjectActions({ tech_stack, source_code, live_demo }) {
  return (
    <div className="mx-auto flex max-w-prose justify-between px-4 xl:px-0">
      {tech_stack && <TechStack {...{ tech_stack }} />}
      <ProjectLinks source_code={source_code} live_demo={live_demo} />
    </div>
  );
}

function ProjectTitle({ title }) {
  return (
    <div className="px-4 xl:px-0">
      <h1 className="text-center font-heading text-4xl font-medium md:text-left md:text-5xl">
        {title}
      </h1>
    </div>
  );
}

function ProjectImage({ image, title }) {
  return (
    <div className="shadow-lg shadow-black/20">
      <CoverImage cover_image={image} title={title} />
    </div>
  );
}
function MoreProjects({ moreProjects }) {
  return (
    <div className="space-y-12">
      <h2 className="px-4 text-center font-heading text-4xl font-medium md:text-left xl:px-0">
        More Projects
      </h2>
      <Projects projects={moreProjects} />
    </div>
  );
}
