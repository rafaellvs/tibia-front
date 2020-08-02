import styled from 'styled-components'

const Cell = styled.td`
  max-width: ${({ width }) => width || 'unset'};
  text-align: ${({ align }) => align || 'left'};
`

export default Cell
