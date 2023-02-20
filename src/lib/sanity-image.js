import client from "@/lib/sanity-client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export function buildImgUrl(src) {
  return builder.image(src).fit("max").auto("format").url();
}
