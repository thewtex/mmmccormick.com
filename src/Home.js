import React from 'react'
import Head from 'react-helmet'

import {
  NavItem,
  Space,
  Toolbar
} from 'rebass'

import Layout from './Layout'

const Home = ({ posts }) =>
  <Layout>
    <Head>
      <title>Matthew M. McCormick, Ph.D.</title>
      <meta name='Matthew M. McCormick, Ph.D.' content='Matt McCormick&#39;s Homepage' />
    </Head>

    <Toolbar>
      <NavItem href="https://mmmccormick.com/">
        <div className='name-logo'>Matt McCormick</div>
      </NavItem>
      <Space auto />
    </Toolbar>

    <h1>Home</h1>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>

Lorem ipsum dolor sit amet, <i>italic</i> <b>bold</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
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
