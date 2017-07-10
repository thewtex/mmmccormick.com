import React from 'react'
import styled from 'styled-components'
import {
  Absolute,
  Toolbar,
  NavLink,
} from 'rebass'

const CustomNameNavLink = styled(NavLink)`
  font-family: 'Open Sans Condensed', sans-serif;
`

const NavBar = props => (
  <div>
    <Toolbar py={2}>
      <CustomNameNavLink href="https://mmmccormick.com/" children='Matt McCormick'/>
    </Toolbar>
  </div>
)

export default NavBar
