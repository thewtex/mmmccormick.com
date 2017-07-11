import React from 'react'
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
        <Text>{`Built with `}
        <Link href='http://phenomic.io' children='Phenomic.io' />
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
