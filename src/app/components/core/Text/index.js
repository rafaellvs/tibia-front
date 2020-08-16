import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

import CoreText from './text'

const Text = styled(CoreText)`
  ${css`${theme.variants.default}`}
  ${({ variant }) => variant && css`${theme.variants[variant]}`}

  margin: 0;
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
`

export default Text
