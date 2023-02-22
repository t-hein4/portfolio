import { Logo } from "./logo";

export function TechStack({ tech_stack }) {
  return (
    <div className="grid gap-y-2">
      {tech_stack.map((tech) => (
        <a
          key={tech._id}
          href={tech.link}
          className="flex items-center gap-2 text-sky-800 hover:text-sky-500 hover:underline"
        >
          <Logo logo={tech.logo} name={tech.name} />
          <span className="text-sm">{tech.name}</span>
        </a>
      ))}
    </div>
  );
}
