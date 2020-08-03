import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: .8rem 0;
  transition: background .3s;

  &:hover {
    background: ${theme.colors.hover};
  }
`

export const Link = styled.a`
  text-decoration: none;
`
