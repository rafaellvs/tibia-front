import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  height: ${theme.navbarHeight};
`
