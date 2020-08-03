import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'

import entities from 'app/helpers/entities'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'

import Loading from 'app/components/Loading'

import { Container } from './styled'

const Template = ({ entity }) => {
  const [data, setData] = useState({ error: false })
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const found = entities.filter(e => e.url === entity).length

    if (!found) navigate('404')
    else {
      setIsFetching(true)
      fetch(`https://tibia-db.herokuapp.com/${entity}`)
        .then(response => response.json())
        .then(response => {
          setData(response)
          setIsFetching(false)
        })
        .catch(err => {
          setData({ error: err })
          setIsFetching(false)
        })

      !found && navigate('404')
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Container>
      {isFetching && <Loading />}

      {data.error && <Text align='center'>Failed fetching data.</Text>}

      {
        data.error === undefined &&
          <>
            <Text component='h1' padding='0 0 1rem 0'>
              Boots
            </Text>

            <Table data={data} />
          </>
      }
    </Container>
  )
}

Template.propTypes = {
  entity: PropTypes.string,
}

export default Template
