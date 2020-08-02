import React, { useEffect } from 'react'

import data from 'app/helpers/data'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'

import { Container } from './styled'

const HomeMock = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Container>
      <Text component='h1' padding='0 0 1rem 0'>
        Boots
      </Text>

      <Table data={data} />
    </Container>
  )
}

export default HomeMock
