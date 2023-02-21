import { groq } from "next-sanity";
import client from "@/lib/sanity-client";

export const allProjects = groq`
  *[_type == 'project']
    { _id, 
      title, 
      date, 
      tech_stack[]->{_id, name},
      excerpt,
      cover_image,
      author->{name, picture},
      'slug': slug.current
    }
`;

export const projectsSlugs = groq`
  *[_type == 'project'][].slug.current
`;

export const projectBySlug = groq`
  *[_type == 'project' && slug.current == $slug] [0]
    { 
      content, 
      title, 
      date, 
      excerpt, 
      cover_image, 
      author->{name, picture} 
    }
`;
