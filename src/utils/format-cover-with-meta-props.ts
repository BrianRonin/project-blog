export const format_cover_with_meta_props = (
  post,
) => ({
  coverWithMetaProps: {
    coverWithMeta: {
      url: post.cover.data.attributes.url,
      alternativeText:
        post.cover.data.attributes
          .alternativeText,
    },
    articleMetaProps: {
      category:
        post.category.data.attributes.name ?? '',
      createdAt: post.createdAt,
      tags: post.tags.data.reduce(
        (prev, tag, index) => {
          return [...prev, tag.attributes]
        },
        [],
      ),
      author: {
        name: post.author.data.attributes.name,
        slug: post.author.data.attributes.slug,
      },
    },
  },
})
