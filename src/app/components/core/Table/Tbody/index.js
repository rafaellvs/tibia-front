import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'

import AccordionCell from '../AccordionCell'
import Cell from '../Cell'

// const renderCellContent = (column, content) => {
//   if (!content) return <Text align='center'>-</Text>
//   if (column === 'image') return <Image src={content} />
//   if (Array.isArray(content)) return <AccordionCell content={content} />
//   else return <Text>{content}</Text>
// }

const renderCellContent = (column, content) =>
  !content
    ? <Text align='center'>-</Text>
    : column === 'image'
      ? <Image src={content} />
      : Array.isArray(content)
        ? <AccordionCell content={content} />
        : <Text>{content}</Text>

const Tbody = ({ columns, data }) =>
  <tbody>
    {data.map(row =>
      <tr
        key={row.id}
        id={row.id}
      >
        {columns.map((column, i) =>
          <Cell
            key={i}
            id={column}
          >
            {renderCellContent(column, row[column])}
          </Cell>
        )}
      </tr>
    )}
  </tbody>

Tbody.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
}

export default Tbody
