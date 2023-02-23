export function ProjectLinks({ source_code, live_demo }) {
  return (
    (source_code || live_demo) && (
      <div className="flex flex-col justify-center gap-3">
        {source_code && <ProjectLink href={source_code} name="Source code" />}
        {live_demo && <ProjectLink href={live_demo} name="Live demo" />}
      </div>
    )
  );
}

function ProjectLink({ href, name }) {
  return (
    <a
      href={href}
      className="group relative cursor-pointer rounded-md 
      bg-gradient-to-bl from-sky-600 via-blue-800 to-sky-600 px-2 
      py-1 font-primary text-sm font-semibold 
      text-neutral-200 shadow-md ring-1 ring-neutral-400/50 hover:shadow-none"
    >
      <span
        className="absolute inset-0 block h-full w-full cursor-pointer 
        rounded-md bg-white bg-gradient-to-bl from-blue-800 
      via-sky-600 to-blue-800 px-2 py-1 font-primary text-sm 
      text-neutral-200 opacity-0 shadow-md transition-all duration-150
        ease-linear group-hover:opacity-100 group-hover:shadow-none"
      >
        {name}
      </span>
      {name}
    </a>
  );
}
