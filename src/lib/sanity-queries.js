import { groq } from "next-sanity";

export const query = Object.freeze({
  allProjects: groq`
    *[_type == 'project'] { 
      _id, 
      title, 
      date, 
      excerpt,
      cover_image,
      'slug': slug.current,
      tech_stack[]->{_id, name, logo, link},
      author->{name, picture}
    }
  `,

  projectsSlugs: groq`
    *[_type == 'project'][].slug.current
  `,

  projectAndMoreProjects: groq`
  {
    "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
      content, 
      title, 
      date, 
      excerpt, 
      cover_image, 
      tech_stack[]->{_id, name, logo, link},
      author->{name, picture}
    },
    "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
      _id, 
      title, 
      date, 
      excerpt,
      cover_image,
      'slug': slug.current,
      tech_stack[]->{_id, name, logo, link},
      author->{name, picture}
    }
  }`,

  aboutMe: groq`*[_type == 'author' && name == 'Thein Hein'] [0]`,
});
