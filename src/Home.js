import React from 'react'
import Head from 'react-helmet'

import Layout from './Layout'

const Home = ({ posts }) =>
  <Layout>
    <Head>
      <title>Matthew M. McCormick, Ph.D.</title>
      <meta name='Matthew M. McCormick, Ph.D.' content='Matt McCormick&#39;s Homepage' />
    </Head>
    <h1>Home</h1>
    {/*
      <ul>
        {posts &&
          posts.node &&
          posts.node.list &&
          posts.node.list.map(post =>
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title || post.id}</Link>
            </li>
          )}
        {posts.node &&
          posts.node.hasNextPage &&
          <Link to={`/after/${posts.node.next}`}>Older posts</Link>
        }
      </ul>
     */}
  </Layout>

export default Home
