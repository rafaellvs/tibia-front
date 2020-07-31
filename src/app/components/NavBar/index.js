import React from 'react'

import Text from 'app/components/core/Text'

import { Container } from './styled'

const NavBar = () => {
  return (
    <Container id='navbar'>
      <Text component='h1'>
        React + Parcel
      </Text>
    </Container>
  )
}

export default NavBar
