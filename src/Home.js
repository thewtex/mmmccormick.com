import React from 'react'
import Head from 'react-helmet'
import {
  BackgroundImage,
  Border,
  Box,
  Card,
  Flex
} from 'rebass'
import { Link } from 'react-router'

import Layout from './Layout'
import Heading from './Heading'
import Subhead from './Subhead'

const cardWidth = 270
const boxWidth = 280

const Home = ({ posts }) => (
  <Layout>
    <Head>
      <title>Matthew M. McCormick, Ph.D.</title>
      <meta name='Matthew M. McCormick, Ph.D.' content='Matt McCormick&#39;s Homepage' />
    </Head>

    <Border py={4}>
    <Flex wrap align='flex-start' justify='center'>

      <Box p={2} width={boxWidth}>
        <Link href='/about'>
          <Card width={cardWidth} >
            <BackgroundImage
               src='/images/AboutHeadshot.jpg'
               />
            <Subhead p={2}>
              About
            </Subhead>
          </Card>
        </Link>
      </Box>

      <Box p={2} width={boxWidth}>
        <Link href='/blog'>
          <Card width={cardWidth} >
            <BackgroundImage
               src='/images/BlogMythicalManMonth.png'
               />
            <Subhead p={2}>
              Blog
            </Subhead>
          </Card>
        </Link>
      </Box>

    </Flex>
    </Border>

  </Layout>
)

export default Home
