import React from 'react'
import PropTypes from 'prop-types'

import Thead from './Thead'
import Tbody from './Tbody'

import { CoreTable } from './styled'

const Table = ({ data }) => {
  const columns =
    Object.keys(data[0])
      .filter(column => column !== 'id')

  return (
    <CoreTable>
      <Thead columns={columns} />
      <Tbody
        columns={columns}
        data={data}
      />
    </CoreTable>
  )
}

Table.propTypes = {
  data: PropTypes.array,
}

export default Table
