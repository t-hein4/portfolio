import { Logo } from "./logo";

export function TechStack({ tech_stack }) {
  return (
    <div className="flex flex-col text-sm font-semibold md:flex-row md:items-center">
      <div className="pr-2 pb-2 md:pb-0">Built with:</div>
      <div className="flex w-fit flex-col divide-y divide-neutral-200 md:w-full md:flex-row md:items-center md:divide-x md:divide-y-0">
        {tech_stack.map((tech) => (
          <a
            key={tech._id}
            href={tech.link}
            className="flex items-center gap-2 py-1 hover:underline md:px-3"
          >
            <Logo logo={tech.logo} name={tech.name} />
            <span className="italic">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
