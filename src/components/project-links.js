export function ProjectLinks({ source_code, live_demo }) {
  return (
    (source_code || live_demo) && (
      <div className="flex flex-col justify-center gap-3">
        {source_code && (
          <a
            href={source_code}
            className="cursor-pointer rounded-md bg-white px-2 py-1 font-primary text-sm text-neutral-900 shadow-md ring-1 ring-neutral-400/50 transition-all duration-150 ease-in-out hover:bg-sky-700  hover:text-white hover:shadow-none"
          >
            Source code
          </a>
        )}
        {live_demo && (
          <a
            href={live_demo}
            className="cursor-pointer rounded-md bg-white px-2 py-1 font-primary text-sm text-neutral-900 shadow-md ring-1 ring-neutral-400/50 transition-all duration-150 ease-in-out hover:bg-sky-700  hover:text-white hover:shadow-none"
          >
            Live demo
          </a>
        )}
      </div>
    )
  );
}
