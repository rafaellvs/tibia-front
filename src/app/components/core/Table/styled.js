import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const CoreTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;

  th, td {
    text-align: center;
    padding: .5rem .8rem;

    &:first-child, :last-child {
      text-align: left;
    }
  }

  th:last-child {
    width: 1%;
  }

  tbody tr {
    height: 100px;
    transition: background .3s, height .3s;

    &:hover {
      background: ${theme.colors.hover};
    }
  }
`
