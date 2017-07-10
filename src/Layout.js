import React from 'react'
import Head from 'react-helmet'
import {
  Provider
} from 'rebass'

import theme from './theme.js'
import NavBar from './NavBar'

const Layout = ({ children }) =>
  <Provider theme={theme}>
    <Head>
      <html lang='en' /> {/* this is valid react-helmet usage! */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <NavBar/>
      {/* Blog About Portfolio
        OpenCV Twitter GitHub LinkedIn... */}
    <div>{children}</div>
    <footer>
      {/* ... */}
    </footer>
  </Provider>

export default Layout
