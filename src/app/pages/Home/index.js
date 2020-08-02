import React, { useState, useEffect } from 'react'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'

import Loading from 'app/components/Loading'

import { Container } from './styled'

const Home = () => {
  const [data, setData] = useState({ error: false })
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)

    fetch('http://localhost:3000/boots')
      .then(response => response.json())
      .then(response => {
        setData(response)
        setIsFetching(false)
      })
      .catch(err => {
        setData({ error: err })
        setIsFetching(false)
      })
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

export default Home
