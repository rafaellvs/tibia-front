import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.nav`
  width: 100%;
  height: ${theme.navbarHeight};
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: 0 3rem;
`
