const author = {
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "picture",
      type: "image",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "city",
      type: "string",
    },
    {
      name: "state",
      type: "string",
    },
    {
      name: "country",
      type: "string",
    },
    {
      name: "zip_code",
      type: "number",
    },
    {
      name: "code_pen",
      type: "url",
    },
    {
      name: "github",
      type: "url",
    },
    {
      name: "linkedIn",
      type: "url",
    },
    {
      name: "about",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "cover_image",
      type: "image",
    },
  ],
};

export default author;
