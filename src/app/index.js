import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

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
  <>
    <GlobalStyles />
    <Router />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
