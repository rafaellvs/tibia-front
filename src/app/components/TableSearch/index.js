import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import icon from 'assets/images/icon-search.svg'

import Image from 'app/components/core/Image'
import Input from 'app/components/core/Input'

import { Container } from './styled'

const TableSearch = ({ response, setFullData }) => {
  const [input, setInput] = useState('')

  const handleChange = event =>
    setInput(event.target.value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input) {
        const results =
          response.filter(item =>
            Object.values(item).some(value =>
              value && value.toString().toLowerCase().includes(input.toLowerCase())
            )
          )

        setFullData(results)
      } else {
        setFullData(response)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [input])

  return (
    <Container>
      <Image src={icon} width='25px' />
      <Input
        type='text'
        placeholder='search...'
        value={input}
        onChange={handleChange}
        margin='0 0 0 .5rem'
      />
    </Container>
  )
}

TableSearch.propTypes = {
  response: PropTypes.array,
  setFullData: PropTypes.func,
}

export default TableSearch
