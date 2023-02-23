import Image from "next/image";
import { buildImgUrl } from "@/lib/sanity-image";

export function CoverImage({ cover_image, title, idx }) {
  return (
    <Image
      width={2000}
      height={1000}
      alt={`Cover image for ${title}`}
      src={buildImgUrl(cover_image)}
      priority={idx === 0}
    />
  );
}
