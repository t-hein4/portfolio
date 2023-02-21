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
      tech_stack[]->{_id, name},
      author->{name, picture}
    }
  `,

  projectsSlugs: groq`
    *[_type == 'project'][].slug.current
  `,

  projectBySlug: groq`
    *[_type == 'project' && slug.current == $slug] [0] { 
      content, 
      title, 
      date, 
      excerpt, 
      cover_image, 
      tech_stack[]->{_id, name},
      author->{name, picture}
    }
  `,

  moreProjects: groq`
    *[_type == 'project' && slug.current != $slug] { 
      _id, 
      title, 
      date, 
      excerpt,
      cover_image,
      'slug': slug.current,
      tech_stack[]->{_id, name},
      author->{name, picture}
    }
  `,
});
