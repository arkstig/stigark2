const portfolio = {
  title: "Portfolio",
  name: "portfolio",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Coverimage",
      name: "portfolioimage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Image1",
      name: "image1",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Image2",
      name: "image2",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Image3",
      name: "image3",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Image4",
      name: "image4",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Image5",
      name: "image5",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Ingress",
      name: "ingress",
      type: "text",
    },
    {
      title: "Ingress2",
      name: "ingress2",
      type: "text",
    },
    {
      title: "Kategorier",
      name: "kategorier",
      type: "text",
    },
    {
      title: "Richtext",
      name: "hovedinnhold",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Richtext1",
      name: "hovedinnhold2",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Richtext2",
      name: "hovedinnhold3",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Richtext3",
      name: "hovedinnhold4",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Richtext4",
      name: "hovedinnhold5",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Kategorier",
      name: "kategoriSet",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "HTML", value: "HTML" },
          { title: "CSS", value: "CSS" },
          { title: "React", value: "React" },
          { title: "Javascript", value: "Javascript" },
          { title: "Design", value: "Design" },
          { title: "Informasjonsarkitektur", value: "Informasjonsarkitektur" },
          { title: "Sanity", value: "Sanity" },
          { title: "Github", value: "Github" },
          { title: "UX-design", value: "UX-design" },
          { title: "Kommunikasjons-design", value: "Kommunikasjons-design" },
        ],
      },
    },
    {
      title: "Link",
      name: "reddit",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      title: "Link",
      name: "live",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};

export default portfolio;
