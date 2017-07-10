import React from 'react'
import Head from 'react-helmet'
import {
  BackgroundImage,
  Card,
  Text
} from 'rebass'

import Layout from './Layout'
import Heading from './Heading'
import Subhead from './Subhead'

const Home = ({ posts }) => (
  <Layout>
    <Head>
      <title>Matthew M. McCormick, Ph.D.</title>
      <meta name='Matthew M. McCormick, Ph.D.' content='Matt McCormick&#39;s Homepage' />
    </Head>

    <Card width={270} >
      <BackgroundImage
         src='/images/AboutHeadshot.jpg'
	 />
      <Subhead p={2}>
        About
      </Subhead>
    </Card>

  </Layout>
)

export default Home
