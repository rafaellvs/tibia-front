import React from 'react'
import ReactDOM from 'react-dom'
import { LocationProvider } from '@reach/router'
import WebFont from 'webfontloader'
import 'regenerator-runtime'

import Router from 'app/components/Router'
import GlobalStyles from 'app/helpers/globalStyles'

WebFont.load({
  google: {
    families: [
      'Open Sans: 300,400,500,600,700,800',
      'Roboto: 300,400,500,600,700,800',
      'Montserrat: 300,400,500',
    ],
  },
})

const App = () => (
  <LocationProvider>
    <GlobalStyles />
    <Router />
  </LocationProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
