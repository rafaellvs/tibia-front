import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import Navigation from './Navigation'

import { Container } from './styled'

const Pagination = ({ response, setData }) => {
  const [selected, setSelected] = useState(0)

  const ITEMS_TO_SHOW = 25
  const totalPages = Math.ceil(response.length / ITEMS_TO_SHOW)
  const sliceStart = selected * ITEMS_TO_SHOW
  const sliceEnd =
    selected === totalPages - 1
      ? sliceStart + (response.length % ITEMS_TO_SHOW)
      : sliceStart + ITEMS_TO_SHOW

  useEffect(() => {
    setData(
      response.slice(sliceStart, sliceEnd)
    )
  }, [selected])

  return (
    <Container>
      <Text align='center'>
        {`${sliceStart}-${sliceEnd} / ${response.length}`}
      </Text>

      <Navigation
        selected={selected}
        setSelected={setSelected}
        totalPages={totalPages}
      />
    </Container>
  )
}

Pagination.propTypes = {
  response: PropTypes.array,
  setData: PropTypes.func,
}

export default Pagination
