import { groq } from "next-sanity";

export const query = Object.freeze({
  allProjects: groq`
    *[_type == 'project'] { 
      _id, 
      title, 
      date, 
      tech_stack[]->{_id, name},
      excerpt,
      cover_image,
      author->{name, picture},
      'slug': slug.current
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
      author->{name, picture} 
    }
  `,

  moreProjects: groq`
    *[_type == 'project' && slug.current != $slug] { 
      _id, 
      title, 
      date, 
      tech_stack[]->{_id, name},
      excerpt,
      cover_image,
      author->{name, picture},
      'slug': slug.current
    }
  `,
});
