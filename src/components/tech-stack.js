import { Logo } from "./logo";

export function TechStack({ tech_stack }) {
  return (
    <div className="flex flex-col text-sm font-semibold lg:flex-row lg:items-center lg:text-base">
      <div className="pr-2 pb-2 lg:w-24 lg:pb-0">Built with:</div>
      <div className="flex w-fit flex-col divide-y divide-neutral-200 lg:w-full lg:flex-row lg:items-center lg:divide-x lg:divide-y-0">
        {tech_stack.map((tech) => (
          <a
            key={tech._id}
            href={tech.link}
            className="flex items-center gap-2 py-1 hover:underline lg:px-3"
          >
            <Logo logo={tech.logo} name={tech.name} />
            <span className="italic">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
