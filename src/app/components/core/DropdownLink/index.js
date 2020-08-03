import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import { Container, Link } from './styled'

const DropdownLink = ({ href, children }) =>
  <Link href={href}>
    <Container>
      <Text padding='0 1rem'>
        {children}
      </Text>
    </Container>
  </Link>

DropdownLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}

export default DropdownLink
