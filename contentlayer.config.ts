import rehypePrism from 'rehype-prism-plus';

import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    socialImage: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    url: {
      type: 'string',
      required: false,
    },
    difficulty: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: { rehypePlugins: [[rehypePrism, { ignoreMissing: true }]] },
});
