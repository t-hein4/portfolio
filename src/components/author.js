import { buildImgUrl } from "@/lib/sanity-image";
import Image from "next/image";

export function Author({ name, picture }) {
  return (
    <div className="flex items-center gap-8">
      <Image
        width={56}
        height={56}
        alt={`${name}'s picture`}
        src={buildImgUrl(picture)}
        className="h-14 w-14 rounded-full grayscale"
      />
      <span className="text-lg font-bold">{name}</span>
    </div>
  );
}
