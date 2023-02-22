const project = {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "excerpt",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      type: "reference",
      to: [
        {
          type: "author",
        },
      ],
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "cover_image",
      type: "image",
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "tech_stack",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "technology",
            },
          ],
        },
      ],
    },
    {
      name: "source_code",
      type: "url",
    },
    {
      name: "live_demo",
      type: "url",
    },
  ],
};

export default project;
