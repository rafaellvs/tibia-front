import React from 'react'
import PropTypes from 'prop-types'

import arrow from 'assets/images/icon-arrow.svg'

import { formatAttribute } from 'app/helpers/utils'

import { sort } from 'app/helpers/table-sort'

import Tooltip from 'app/components/core/Tooltip'

import { Th, HeaderText, SortIcon } from './styled'

const Thead = ({ columns, response, setFullData }) =>
  <thead>
    <tr>
      {columns.map((column, i) =>
        <Th
          key={i}
          id={`${column}-th`}
          onClick={() => sort(response, setFullData, columns, column)}
        >
          <Tooltip content={formatAttribute(column)}>
            <HeaderText variant='hideOverflow'>
              {formatAttribute(column)}
            </HeaderText>

            <SortIcon
              id={`${column}-sort`}
              src={arrow}
              style={{ transform: 'none' }}
            />
          </Tooltip>
        </Th>
      )}
    </tr>
  </thead>

Thead.propTypes = {
  columns: PropTypes.array,
  response: PropTypes.array,
  setFullData: PropTypes.func,
}

export default Thead
