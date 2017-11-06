import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp, renderApp } from '@phenomic/preset-react-app/lib/client'
import ReactGA from 'react-ga'

import BlogContainer from './src/BlogContainer'
import BlogPostContainer from './src/BlogPostContainer'
import Home from './src/Home'
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
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/after/:after' component={Home} />
    <Route path='/blog' component={BlogContainer} />
    <Route path='/blog/*' component={BlogPostContainer} />
    <Route path='*' component={PageError} />
  </Router>

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}
