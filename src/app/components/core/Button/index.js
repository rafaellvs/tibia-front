import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

const Button = styled.button`
  ${css`${theme.variants.default}`}
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  border: none;
  padding: .5rem;
  transform: ${({ active }) => active && 'scale(1.25)'};
  transition: background .3s, color .3s;

  &:hover:not([disabled]) {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    cursor: pointer;
  }

  &:disabled {
    background: ${theme.colors.disabled};
  }
`

export default Button
