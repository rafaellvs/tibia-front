import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'

import entities from 'app/helpers/entities'

import { capitalizeString } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'

import Loading from 'app/components/Loading'
import BackToTop from 'app/components/BackToTop'

import { Container } from './styled'

const Template = ({ entity }) => {
  const [response, setResponse] = useState({ error: false })
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const found = entities.filter(e => e.url === entity).length

    if (!found) navigate('404')
    else {
      setIsFetching(true)
      fetch(`https://tibia-db.herokuapp.com/${entity}`)
        .then(response => response.json())
        .then(response => {
          setResponse(response)
          setIsFetching(false)
        })
        .catch(err => {
          setResponse({ error: err })
          setIsFetching(false)
        })
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Container>
      {isFetching && <Loading />}

      {response.error && <Text align='center'>Failed fetching data.</Text>}

      {
        response.length > 1 &&
          <>
            <Text component='h1' padding='0 0 1rem 0'>
              {capitalizeString(entity)}
            </Text>

            <Table response={response} />
            <BackToTop />
          </>
      }
    </Container>
  )
}

Template.propTypes = {
  entity: PropTypes.string,
}

export default Template
