import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'
import {
  BackgroundImage,
  Border,
  Box,
  Card,
  Flex,
  Text
} from 'rebass'

import Layout from './Layout'
import PageError from './PageError'
import Subhead from './Subhead'

const About = ({ hasError, page }) => {
  if (hasError) {
    return <PageError error={page.error} />
  }

  return (
    <Layout>
        <Border py={4}>
        <Flex wrap align='flex-start' justify='flex-start'>

          <Box p={2} width='280px'>
            <Card width='270px'>
              <BackgroundImage
                 src='/images/AboutHeadshot.jpg'
                 />
              <Subhead p={2}>
                About
              </Subhead>
            </Card>
          </Box>

        </Flex>
        </Border>
    </Layout>
  )
}

export default About
