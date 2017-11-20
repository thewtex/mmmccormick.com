import React from 'react'
import { Link } from 'react-router'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

import Layout from './Layout'
import PageError from './PageError'

const Blog = ({ isLoading, posts }) => (
  <Layout navTab='Blog'>
  {isLoading && "Loading..."}
  {!isLoading && (
      <ul>
        {posts &&
          posts.node &&
          posts.node.list &&
          posts.node.list.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
            </li>
          ))}
      </ul>
    )}
  </Layout>
)

export default Blog
