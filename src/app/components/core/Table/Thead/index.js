import React from 'react'
import PropTypes from 'prop-types'

import { formatAttribute } from 'app/helpers/utils'

import Text from 'app/components/core/Text'

const Thead = ({ columns }) =>
  <thead>
    <tr>
      {columns.map((column, i) =>
        column !== 'id' &&
          <th key={column} id={`${column}-th`}>
            <Text>
              {formatAttribute(column)}
            </Text>
          </th>
      )}
    </tr>
  </thead>

Thead.propTypes = {
  columns: PropTypes.array,
}

export default Thead
