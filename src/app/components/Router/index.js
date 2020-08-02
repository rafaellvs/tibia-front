import React from 'react'
import { Router } from '@reach/router'

import NavBar from 'app/components/NavBar'

import Home from 'app/pages/Home'
import Template from 'app/pages/Template'

import { Section, MainContent, Container } from './styled'

// TODO make 404 page
const Page404 = () => <div>404</div>

const AppRouter = () => {
  return (
    <Section>
      <NavBar />

      <MainContent>
        <Container>
          <Router>
            <Page404 default />

            <Home path='/' />

            <Template path='/boots' />
          </Router>
        </Container>
      </MainContent>
    </Section>
  )
}

export default AppRouter
