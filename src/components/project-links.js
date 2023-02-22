export function ProjectLinks({ source_code, live_demo }) {
  return (
    <div className="flex flex-col justify-center gap-3">
      <a
        href={source_code}
        className="cursor-pointer rounded-md bg-neutral-500 px-2 text-sm text-white shadow-md ring-1 ring-neutral-400/50 transition-all duration-150 ease-in-out hover:bg-white hover:text-neutral-800 hover:shadow-none"
      >
        Source code
      </a>
      <a
        href={live_demo}
        className="cursor-pointer rounded-md bg-neutral-500 px-2 text-sm text-white shadow-md ring-1 ring-neutral-400/50 transition-all duration-150 ease-in-out hover:bg-white hover:text-neutral-800 hover:shadow-none"
      >
        Live demo
      </a>
    </div>
  );
}
