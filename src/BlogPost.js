import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

import Layout from './Layout'
import PageError from './PageError'

const BlogPost = ({ hasError, page }) => {
  if (hasError) {
    return <PageError error={page.error} />
  }

  return (
    <Layout>
      {isLoading && "Loading..."}
      {!isLoading &&
      page.node && (
      <article>
        <h1>{page.node.title}</h1>
        <BodyRenderer>
          {page.node.body}
        </BodyRenderer>
      </article>
      )}
    </Layout>
  )
}

export default BlogPost
