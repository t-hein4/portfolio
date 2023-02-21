import { buildImgUrl } from "@/lib/sanity-image";
import Image from "next/image";

export function Author({ name, picture }) {
  return (
    <div className="flex items-center gap-8">
      <Avatar picture={picture} />
      <Name name={name} />
    </div>
  );
}

function Avatar({ picture }) {
  return (
    <Image
      width={56}
      height={56}
      alt={`${name}'s picture`}
      src={buildImgUrl(picture)}
      className="h-14 w-14 rounded-full grayscale"
    />
  );
}

function Name({ name }) {
  return <span className="text-lg font-bold">{name}</span>;
}
