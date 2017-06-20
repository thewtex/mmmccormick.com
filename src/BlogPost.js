import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

import Layout from './Layout'

const BlogPost = ({ page }) =>
  <Layout>
    {page.node &&
    <article>
      <h1>{page.node.title}</h1>
      <BodyRenderer>
        {page.node.body}
      </BodyRenderer>
    </article>}
  </Layout>

export default BlogPost
