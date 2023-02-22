import { Logo } from "./logo";

export function TechStack({ tech_stack }) {
  return (
    <div className="flex flex-col divide-y divide-neutral-200 lg:flex-row lg:items-center lg:divide-x lg:divide-y-0">
      {tech_stack.map((tech) => (
        <a
          key={tech._id}
          href={tech.link}
          className="flex items-center gap-2 py-1 hover:underline lg:flex-col lg:px-3"
        >
          <Logo logo={tech.logo} name={tech.name} />
          <span className="text-sm italic">{tech.name}</span>
        </a>
      ))}
    </div>
  );
}
