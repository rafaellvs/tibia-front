import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import { Container, TooltipContainer } from './styled'

const Tooltip = ({ content, children }) => {
  return (
    <Container>
      {
        content &&
          <TooltipContainer>
            <Text>{content}</Text>
          </TooltipContainer>
      }

      {children}
    </Container>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
}

export default Tooltip
