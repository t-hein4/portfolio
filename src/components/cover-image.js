import Image from "next/image";

export function CoverImage({ cover_image, title }) {
  return (
    <Image
      width={2000}
      height={1000}
      alt={`Cover image for ${title}`}
      src={cover_image}
    />
  );
}
