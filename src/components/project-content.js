import { PortableText } from "@portabletext/react";

export function ProjectContent({ content }) {
  return (
    <div className="portable-text max-w-prose">
      <PortableText value={content} />
    </div>
  );
}
