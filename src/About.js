import React from 'react'
import Head from 'react-helmet'
import {
  BackgroundImage,
  Border,
  Box,
  Card,
  Link,
  Flex,
  Text
} from 'rebass'
import FontAwesome from 'react-fontawesome'

import Layout from './Layout'
import PageError from './PageError'
import Subhead from './Subhead'

const About = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="/fonts/academicons-1.8.0.min.css"/>
    </Head>
    <Border py={4}>
    <Flex wrap align='flex-start' justify='flex-start'>

      <Box p={2} width='280px'>
        <Card width='270px'>
          <BackgroundImage
             src='/images/AboutHeadshot.jpg'
             />
          <Subhead center p={2}>
            <Link href='mailto:matt@mmmccormick.com'>
              <FontAwesome size='lg' name='envelope'/>
            </Link>
            {' '}
            <Link href='https://github.com/thewtex/'>
              <FontAwesome size='lg' name='github'/>
            </Link>
            {' '}
            <Link href='https://www.linkedin.com/in/drmatthewmccormick/'>
              <FontAwesome size='lg' name='linkedin'/>
            </Link>
            {' '}
            <Link href='https://twitter.com/thewtex/'>
              <FontAwesome size='lg' name='twitter'/>
            </Link>
            {' '}
            <Link href='https://orcid.org/0000-0001-9475-3756'>
              <i className="ai ai-orcid ai-lg"></i>
            </Link>
            {' '}
            <Link href='https://scholar.google.com/citations?user=lhBRGSQAAAAJ'>
              <i className="ai ai-google-scholar ai-lg"></i>
            </Link>
            {' '}
            <Link href='https://www.researchgate.net/profile/Matthew_Mccormick5'>
              <i className="ai ai-researchgate ai-lg"></i>
            </Link>
          </Subhead>
        </Card>
      </Box>

    </Flex>
    </Border>
  </Layout>
)

export default About
