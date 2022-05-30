import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const Blog_Post = ({ data }) => {
  if (!data) return null
  const blog_post = data.prismicBlogPost

  return (
    <Layout>
      <Link to="/blog">Back</Link>
      <hr />
      <h1>{blog_post.data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog_post.data.content.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostByUid($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`

export default Blog_Post