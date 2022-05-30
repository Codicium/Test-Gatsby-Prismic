const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const template = path.resolve("src/templates/blog_post.js")

  pages.data.allPrismicBlogPost.nodes.forEach(blog_post => {
    createPage({
      path: `/blog/${blog_post.uid}`,
      component: template,
      context: {
        uid: blog_post.uid,
      },
    })
 })
}