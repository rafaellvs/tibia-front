import React from 'react'
import PropTypes from 'prop-types'

import { Container, Items, Text } from './styled'

const Dropdown = ({ title, children }) => {
  return (
    <Container>
      <Text component='h3'>
        {title}
      </Text>

      <Items>
        {children}
      </Items>
    </Container>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Dropdown
