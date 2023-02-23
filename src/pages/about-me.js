import client from "@/lib/sanity-client";
import { SanityBlock } from "@/components/sanity-block";
import { CoverImage } from "@/components/cover-image";
import { query } from "@/lib/sanity-queries";
export default function AboutMe({ me }) {
  const { about } = me;
  return (
    <div className="my-32 flex items-center justify-center px-4">
      <SanityBlock value={about} />
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
