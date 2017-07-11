import React from 'react'
import FontAwesome from 'react-fontawesome'
import {
  Box,
  Flex,
  Image,
  Link,
  NavLink,
  Text
} from 'rebass'


const Footer = props => (
  <footer>
    <Flex mx={-2} py={4} align='flex-end'>
      <Box>
        <Text>
        <Link href='https://github.com/thewtex/mmmccormick.com'>
          <FontAwesome size='lg' name='github'/>
        </Link>
        {` Built with `}
        <Link href='https://phenomic.io' children='Phenomic.io' />
        </Text>
      </Box>
      <NavLink
        ml='auto'
        href='http://creativecommons.org/publicdomain/zero/1.0/'>
        <Image src='/images/CC0.svg'/>
      </NavLink>
    </Flex>
  </footer>
)

export default Footer
