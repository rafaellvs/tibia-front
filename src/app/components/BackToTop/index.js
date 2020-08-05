import React from 'react'

import Button from 'app/components/core/Button'

import { Container } from './styled'

const BackToTop = () => {
  return (
    <Container>
      <Button onClick={() => scrollTo(0, 0)}>
        back to top ^
      </Button>
    </Container>
  )
}

export default BackToTop
