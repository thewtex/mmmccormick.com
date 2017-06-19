import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp } from '@phenomic/preset-react-app/lib/client'

import BlogPostContainer from './src/BlogPostContainer.js'

const Home = () =>
  <div>
    <p>
    This is a homepage
    </p>
  </div>

export default createApp(() =>
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/blog/*' component={BlogPostContainer} collection='posts' />
  </Router>
)
