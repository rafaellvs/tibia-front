import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TableSearch from 'app/components/TableSearch'
import TablePagination from 'app/components/TablePagination'

import Thead from './Thead'
import Tbody from './Tbody'

import { Nav, CoreTable } from './styled'

const Table = ({ response }) => {
  const [fullData, setFullData] = useState(response)
  const [data, setData] = useState(response.slice(0, 25))

  const columns =
    Object.keys(response[0])
      .filter(column => column !== 'id')

  return (
    <>
      <Nav>
        <TableSearch
          response={response}
          setFullData={setFullData}
        />
        <TablePagination
          fullData={fullData}
          setData={setData}
        />
      </Nav>

      <CoreTable>
        <Thead columns={columns} />
        <Tbody
          columns={columns}
          data={data}
        />
      </CoreTable>
    </>
  )
}

Table.propTypes = {
  response: PropTypes.array,
}

export default Table
