import { buildImgUrl } from "@/lib/sanity-image";
import Image from "next/image";

export function Logo({ logo, name }) {
  return (
    <Image
      src={buildImgUrl(logo)}
      width={24}
      height={24}
      alt={`${name} logo`}
      className="h-6 w-6"
    />
  );
}
