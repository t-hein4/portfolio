import { groq } from "next-sanity";

export const query = Object.freeze({
  allProjects: groq`
    *[_type == 'project'] { 
      author->{name, picture},
      cover_image,
      date,
      excerpt,
      _id,
      live_demo,
      'slug': slug.current,
      source_code,
      tech_stack[]->{_id, name, logo, link},
      title
    }
  `,

  projectsSlugs: groq`
    *[_type == 'project'][].slug.current
  `,

  projectAndMoreProjects: groq`
  {
    "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
      author->{name, picture},
      content,
      cover_image,
      date,
      excerpt,
      live_demo,
      'slug': slug.current,
      source_code,
      tech_stack[]->{_id, name, logo, link},
      title
    },
    "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
      author->{name, picture},
      cover_image,
      date, 
      excerpt,
      _id,
      live_demo,
      'slug': slug.current,
      source_code,
      tech_stack[]->{_id, name, logo, link},
      title
    }
  }`,

  aboutMe: groq`*[_type == 'author' && name == 'Thein Hein'] [0]`,
});
