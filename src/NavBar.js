import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  Absolute,
  Avatar,
  Box,
  Toolbar,
  NavLink,
  Tabs,
  TabItem
} from 'rebass'
import { Link } from 'react-router'

import theme from './theme'
import Hide from 'hidden-styled'

const draw = keyframes`
  from {
      stroke-dashoffset: 100%;
  }
  to {
      stroke-dashoffset: 0%;
  }
`

const Svg = styled.svg`
  display: inline-block;
  animation-name:: ${draw};
  animation-duration: 3s;
  animation-fill-mode: backwards;
  animation-iteration-count: 31;
  animation-timing-function: linear;
  stroke-dasharray: 200px;
  stroke-dashoffset: 100%;
  fill: transparent;
  width: 60px;
  height: 25px;
`

const CustomFontNavLink = styled(NavLink)`
  font-family: 'Open Sans Condensed', sans-serif;
`

const NavBar = props => (
  <nav>
    <Toolbar py={2}>
      <Avatar size={24} src='/images/NavBarHeadshot.jpg' />
      <CustomFontNavLink href='https://www.mmmccormick.com/' children='Matt McCormick'/>
      <Hide xs>
        <Svg>
          <polyline
            points='0.000,12.149 1.224,12.093 2.449,12.181 3.673,12.474 4.898,12.974 6.122,13.590 7.347,14.127 8.571,14.320 9.796,13.915 11.020,12.787 12.245,11.052 13.469,9.113 14.694,7.608 15.918,7.226 17.143,8.456 18.367,11.334 19.592,15.308 20.816,19.310 22.041,22.042 23.265,22.409 24.490,19.950 25.714,15.086 26.939,9.073 28.163,3.640 29.388,0.427 30.612,0.427 31.837,3.640 33.061,9.073 34.286,15.086 35.510,19.950 36.735,22.409 37.959,22.042 39.184,19.310 40.408,15.308 41.633,11.334 42.857,8.456 44.082,7.226 45.306,7.608 46.531,9.113 47.755,11.052 48.980,12.787 50.204,13.915 51.429,14.320 52.653,14.127 53.878,13.590 55.102,12.974 56.327,12.474 57.551,12.181 58.776,12.093 60.000,12.149'
            stroke={theme.colors.blue2}
            strokeLinejoin='round'
            strokeWidth={1.5} />
        </Svg>
      </Hide>
      <Box mx='auto' />
  {/*<Tabs>
        <TabItem active> */}
          <CustomFontNavLink
            is={Link}
            href='/about'
            children='About'
          />
  {/*</TabItem>
      </Tabs>*/}
    </Toolbar>
  </nav>
)

export default NavBar
