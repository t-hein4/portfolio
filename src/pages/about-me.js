import client from "@/lib/sanity-client";
import { SanityBlock } from "@/components/sanity-block";
import { CoverImage } from "@/components/cover-image";
import { query } from "@/lib/sanity-queries";
export default function AboutMe({ me }) {
  const { about, cover_image, name } = me;
  return (
    <div className="container mx-auto my-16 flex w-fit flex-col gap-16 xl:gap-24">
      <div className="flex flex-col justify-center gap-x-16 gap-y-8">
        <div className="shadow-lg shadow-black/30">
          <CoverImage cover_image={cover_image} title={name} />
        </div>
        <div className="flex items-center justify-center px-4">
          <SanityBlock value={about} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const me = await client.fetch(query.aboutMe);
  return {
    props: {
      me,
    },
  };
}
