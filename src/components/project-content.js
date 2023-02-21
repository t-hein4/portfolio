import { PortableText } from "@portabletext/react";

export function ProjectContent({ content }) {
  return (
    <div className="content max-w-prose">
      <PortableText value={content} />
    </div>
  );
}
