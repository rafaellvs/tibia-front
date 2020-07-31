import React from 'react'
import { Router } from '@reach/router'

import Home from 'app/pages/Home'

// TODO make 404 page
const Page404 = () => <div>404</div>

const AppRouter = () => {
  return (
    <Router>
      <Home path='/' />
      <Page404 default />
    </Router>
  )
}

export default AppRouter
