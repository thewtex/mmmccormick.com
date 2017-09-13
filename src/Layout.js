import React from 'react'
import Head from 'react-helmet'
import {
  Provider
} from 'rebass'

import theme from './theme.js'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) =>
  <Provider theme={theme}>
    <Head>
      <html lang='en' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <script src='/registerServiceWorker.js' async></script>
      <link rel='preload' as='font' href='/fonts/LinLibertine_R_subset.woff' type='font/woff' />
      <link rel='preload' as='font' href='/fonts/LinLibertine_RB_subset.woff' type='font/woff' />
      <link rel='preload' as='font' href='/fonts/LinLibertine_RI_subset.woff' type='font/woff' />
      <link rel='preload' as='font' href='/fonts/LinBiolinum_R_subset.woff' type='font/woff' />
      <link rel='stylesheet' type='text/css' href='/fonts/fonts.css' />
      <link rel='stylesheet' href='/fonts/font-awesome-4.7.0.min.css' />
    </Head>
    <NavBar />
    {/* Blog About Portfolio
        OpenCV Twitter GitHub LinkedIn... */}
    <div>{children}</div>
    <Footer />
  </Provider>

export default Layout
