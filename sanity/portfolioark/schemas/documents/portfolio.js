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
      title: "Text",
      name: "hovedinnhold",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Kategorier",
      name: "kategoriSet",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "React", value: "react" },
          { title: "Javascript", value: "javascript" },
          { title: "Design", value: "design" },
          { title: "Informasjonsarkitektur", value: "informasjonsarkitktur" },
          { title: "Sanity", value: "sanity" },
          { title: "Github", value: "github" },
          { title: "UX-design", value: "uxdesign" },
          { title: "Kommunikasjons-design", value: "kommunikasjonsdesign" },
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
