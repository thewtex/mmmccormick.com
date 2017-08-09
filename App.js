import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'
import ReactGA from 'react-ga'

import BlogPostContainer from './src/BlogPostContainer'
import HomeContainer from './src/HomeContainer'
import Html from './src/Html'
import PageError from './src/PageError'
import About from './src/About'

ReactGA.initialize('UA-104320492-1')
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const routes = () =>
  <Router onUpdate={logPageView} history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='/about' component={About} />
    <Route path='/after/:after' component={HomeContainer} />
    <Route path='/blog/*' component={BlogPostContainer} />
    <Route path='*' component={PageError} />
  </Router>

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
