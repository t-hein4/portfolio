import { PortableText } from "@portabletext/react";

export function SanityBlock({ value }) {
  return (
    <div className="portable-text max-w-prose">
      <PortableText value={value} />
    </div>
  );
}
