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
import Paragraph from './Paragraph'

const About = () => (
  <Layout navTab='About'>
    <Head>
      <link rel="stylesheet" href="/fonts/academicons-1.8.0.min.css"/>
    </Head>
    <Border py={4}>
    <Flex wrap align='flex-start' justify='flex-start'>

      <Box p={2} width='280px'>
        <Card width='270px'>
          <Link href="https://github.com/thewtex/cv/raw/master/mccormick_cv.pdf">
            <BackgroundImage
               src='/images/AboutHeadshot.jpg'
               />
          </Link>
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
      <Box p={2} width={[1, 3/4, 1/2, 1/3]}>
        <Paragraph>
I am a <Link href="http://www.software.ac.uk/policy/manifesto">research
software engineer</Link> who helps scientists perform computational image
analysis for reproducible research.
        </Paragraph>

        <Paragraph>
Currently, I am a Principal Engineer at <Link
href="https://www.kitware.com">Kitware</Link> where I curate the
{' '}<Link href="https://itk.org/">Insight Toolkit (ITK)</Link>. ITK began in
1999 to support analysis of The National Institute of Health (NIH) Visible Human Project. Not only was the
project successful in its original objective, but the open source project's impact far exceeded its original goals.
The technology is a foundation for many commercial products in the United
States. Moreover, the toolkit forms the basis for numerous university
medical image analysis courses taught in the United States and around the
world, studied by students who seek to apply computational and mathematical
methods to advance <Link href="https://opensource.com/resources/open-science">open science</Link>.
        </Paragraph>

        <Paragraph>
I have curated the ITK
community since 2012 by maintaining and developing new software, training and
welcoming new contributors, and developing new documentation.
I employed the advanced image analysis tools in collaborative projects with companies, universities, and national laboratories in medical imaging but also materials science, microscopy, and other domains of scientific image analysis.
        </Paragraph>

        <Paragraph>
Previously, the Insight Toolkit was also applied during my doctoral research in diagnostic ultrasound imaging at the <Link href="https://wisc.edu">University of Wisconsin-Madison</Link>.
Methods to quantify mechanical deformation of atherosclerotic plaques were developed out of lessons in signal processing, imaging physics, and neuroscience in the Departments of Biomedical Engineering and Medical Physics.
        </Paragraph>

        <Paragraph>
During postgraduate school, I was an active member of <Link href="http://www.thehackerwithin.org/">The Hacker Within</Link>, a
peer-teaching organization intended to help graduate students, staff
scientists, faculty, and undergraduate students share open source,
  scientific computing best practices required to effectively perform research.
        </Paragraph>

        <Paragraph>
Studies in cardiovascular biomechanics were motivated by previous work, including an internship on development of peripheral vascular nitinol stents, during my undergraduate studies at <Link href="https://www.mu.edu">Marquette University</Link> in Milwaukee, Wisconsin.
At Marquette, I enjoyed breadth of disciplines fused into Biomedical Engineering, and gained an appreciation for a knowledge of the liberal arts by exploring literature, philosophy, and theology.
        </Paragraph>

        <Paragraph>
Music, and the people who make it, was a hallmark my college experience as it was at <Link href="http://www.cotterschools.org/">Cotter High School</Link> in Winona, Minnesota.
        </Paragraph>

        <Paragraph>
I proudly grew up in rural Caledonia, Minnesota, one of six siblings in a loving family, and I currently reside in the <Link href="http://www.researchtriangle.org/">Research Triangle</Link> region of North Carolina with my wonderful wife.
        </Paragraph>
      </Box>

    </Flex>
    </Border>
  </Layout>
)

export default About
