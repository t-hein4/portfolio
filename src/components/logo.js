import { buildImgUrl } from "@/lib/sanity-image";
import Image from "next/image";

export function Logo({ logo, name }) {
  return (
    <Image
      src={buildImgUrl(logo)}
      width={32}
      height={32}
      alt={`${name} logo`}
    />
  );
}
