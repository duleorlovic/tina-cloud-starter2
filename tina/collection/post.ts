import { videoBlockSchema } from "@/components/blocks/video";
import type { Collection } from "tinacms";

const Post: Collection = {
  label: "Blog Posts",
  name: "post",
  path: "content/posts",
  format: "mdx",
  ui: {
    router: ({ document }) => {                  
      return `/posts/${document._sys.breadcrumbs.join("/")}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "heroImg",
      label: "Hero Image",
    },
    {
      type: "rich-text",
      label: "Excerpt",
      name: "excerpt",
      overrides: {
        toolbar: ["bold", "italic", "link"],
      }
    },
    {
      type: "reference",
      label: "Author",
      name: "author",
      collections: ["author"],
    },
    {
      type: "datetime",
      label: "Posted Date",
      name: "date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
      type: "rich-text",
      label: "Body",
      name: "_body",
      templates: [
        {
          name: "BlockQuote",
          label: "Block Quote",
          fields: [
            {
              name: "children",
              label: "Quote",
              type: "rich-text",
              overrides: {
                toolbar: ["bold", "italic", "link"],
              }
            },
            {
              name: "authorName",
              label: "Author",
              type: "string",
            },
          ],
        },
        {
          name: "DateTime",
          label: "Date & Time",
          inline: true,
          fields: [
            {
              name: "format",
              label: "Format",
              type: "string",
              options: ["utc", "iso", "local"],
            },
          ],
        },
        {
          name: "NewsletterSignup",
          label: "Newsletter Sign Up",
          fields: [
            {
              name: "children",
              label: "CTA",
              type: "rich-text",
            },
            {
              name: "placeholder",
              label: "Placeholder",
              type: "string",
            },
            {
              name: "buttonText",
              label: "Button Text",
              type: "string",
            },
            {
              name: "disclaimer",
              label: "Disclaimer",
              type: "rich-text",
              overrides: {
                toolbar: ["bold", "italic", "link"],
              }
            },
          ],
          ui: {
            defaultItem: {
              placeholder: "Enter your email",
              buttonText: "Notify Me",
            },
          },
        },
        videoBlockSchema,
      ],
      isBody: true,
    },
  ],
};

export default Post;
