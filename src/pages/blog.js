import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => (
    <Layout>
      <Seo title="Blog" />
      <h1>Blog page</h1>
      {data.allPrismicBlogPost.edges.map(blog_post => {
        return (
          <div key={blog_post.node.uid}>
            <h3>{blog_post.node.data.title.text}</h3>
            <br />
            <Link to={`${blog_post.node.uid}`}>Open</Link>
            <br />
            <br />
            <hr />
          </div>
        )
      })}
    </Layout>
  )

  export const pageQuery = graphql`
  query PostsQuery {
    allPrismicBlogPost {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
