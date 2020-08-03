import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

const Link = styled.a`
  ${css`${theme.variants.default}`}

  transition: color .3s;

  &:hover {
    color: ${theme.colors.darkHover};
    text-decoration: none;
  }
`

export default Link
