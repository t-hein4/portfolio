import { Logo } from "./logo";

export function TechStack({ tech_stack }) {
  return (
    <div className="flex items-center text-sm font-semibold">
      <div className="pr-2">Built with:</div>
      <div className="flex items-center divide-x divide-neutral-200">
        {tech_stack.map((tech) => (
          <a
            key={tech._id}
            href={tech.link}
            className="flex items-center gap-2 px-3 hover:underline"
          >
            <Logo logo={tech.logo} name={tech.name} />
            <span className="italic">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
