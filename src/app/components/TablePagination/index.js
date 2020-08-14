import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import Navigation from './Navigation'

import { Container } from './styled'

const TablePagination = ({ fullData, setData }) => {
  const [selected, setSelected] = useState(0)

  const ITEMS_TO_SHOW = 25
  const totalPages = Math.ceil(fullData.length / ITEMS_TO_SHOW)
  const sliceStart = selected * ITEMS_TO_SHOW
  const sliceEnd =
    selected === totalPages - 1
      ? sliceStart + (fullData.length % ITEMS_TO_SHOW)
      : sliceStart + ITEMS_TO_SHOW

  useEffect(() => {
    setData(fullData.slice(sliceStart, sliceEnd))
  }, [selected, fullData])

  useEffect(() => {
    setSelected(0)
  }, [fullData])

  return (
    <Container>
      <Text align='center' padding='0 0 .5rem 0'>
        {`${sliceStart}-${sliceEnd} / ${fullData.length}`}
      </Text>

      <Navigation
        selected={selected}
        setSelected={setSelected}
        totalPages={totalPages}
      />
    </Container>
  )
}

TablePagination.propTypes = {
  fullData: PropTypes.array,
  setData: PropTypes.func,
}

export default TablePagination
