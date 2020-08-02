import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

import CoreText from './text'

const Text = styled(CoreText)`
  margin: 0;
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align};
  
  ${css`${theme.variants.default}`}
  
  ${({ variant }) => variant && css`${theme.variants[variant]}`}
`

export default Text
