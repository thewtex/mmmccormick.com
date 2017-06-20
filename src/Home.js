import Head from 'react-helmet'
import React from 'react'
import { Link } from 'react-router'

const Home = ({ posts }) =>
  <div>
    <Head>
      <title>Hello world</title>
      <meta name='description' content='Everything is awesome!' />
    </Head>
    <h1>Home</h1>
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
  </div>

export default Home
