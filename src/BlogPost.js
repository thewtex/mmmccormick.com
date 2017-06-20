import Head from 'react-helmet'
import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

const BlogPost = ({ page }) =>
  <div>
    <Head>
    <title>{page.node.title}</title>
    {/*
            Not possible yet until
            see https://github.com/phenomic/phenomic/issues/1084
          <meta name="description" content={ page.node.body.slice(0, 150) } />
    */}
    </Head>
    {page.node &&
    <article>
      <h1>{page.node.title}</h1>
      <BodyRenderer>
        {page.node.body}
      </BodyRenderer>
    </article>}
  </div>

export default BlogPost
