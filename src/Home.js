import React from 'react'
import Head from 'react-helmet'
import {
  Text
} from 'rebass'

import Layout from './Layout'
import Heading from './Heading'
import Subhead from './Subhead'

const Home = ({ posts }) =>
  <Layout>
    <Head>
      <title>Matthew M. McCormick, Ph.D.</title>
      <meta name='Matthew M. McCormick, Ph.D.' content='Matt McCormick&#39;s Homepage' />
    </Head>

    <Heading>Home</Heading>
    <Heading>Header 1</Heading>
    <Subhead>Header 2</Subhead>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>

<Text>Lorem ipsum dolor sit amet, <i>italic</i> <b>bold</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
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
