import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

const Input = styled.input`
  ${css`${theme.variants.default}`}

  height: 25px;
  margin: ${({ margin }) => margin || '0'};
  padding: .3rem;
`

export default Input
