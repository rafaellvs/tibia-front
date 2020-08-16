import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
`

export const CoreTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  th, td {
    text-align: center;

    &:first-child, :last-child {
      text-align: left;
    }
  }

  td {
    padding: .8rem;
  }

  th:first-child {
    width: 150px;
  }

  th:last-child {
    width: 200px;
  }

  tbody tr {
    height: 125px;
    transition: background .3s;

    &:hover {
      background: ${theme.colors.hover};
    }
  }
`
