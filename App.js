import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'

import BlogPostContainer from './src/BlogPostContainer'
import HomeContainer from './src/HomeContainer'
import Html from './src/Html.js'

const routes = () =>
  <Router history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='/after/:after' component={HomeContainer} />
    <Route path='/blog/*' component={BlogPostContainer} />
  </Router>

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
