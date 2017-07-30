import React from 'react'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'
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
              <Subhead center p={2}>
                <Link href='https://github.com/thewtex/'>
                  <FontAwesome size='lg' name='github'/>
                </Link>
              </Subhead>
            </Card>
          </Box>

        </Flex>
        </Border>
    </Layout>
  )
}

export default About
