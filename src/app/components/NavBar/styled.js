import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  height: 10vh;
`
