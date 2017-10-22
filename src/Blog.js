import React from 'react'
import { Link } from 'react-router'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

import Layout from './Layout'
import PageError from './PageError'

const Blog = ({ isLoading, page }) => (
  <Layout>
  {isLoading && "Loading..."}
  {!isLoading &&
  page.node && (
    <article>
      <h1>{page.node.title}</h1>
      <BodyRenderer>{page.node.body}</BodyRenderer>
    </article>
    )}
  </Layout>
)

export default Blog
