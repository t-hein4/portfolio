import { createClient } from "next-sanity";

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: ["production"],
  apiVersion: "2023-02-04",
  useCdn: false,
});
