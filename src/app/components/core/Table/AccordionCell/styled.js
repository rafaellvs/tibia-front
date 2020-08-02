import styled from 'styled-components'

import theme from 'app/helpers/theme'

import CoreButton from 'app/components/core/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  overflow: hidden;
  max-height: ${({ height }) => `${height}px`};
  transition: max-height .3s;
`

export const Button = styled(CoreButton)`
  display: block;
  width: 100%;
  margin: 0.5rem auto;
  padding: .2rem .3rem;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  transition: background .3s, color .3s;

  &:hover:not([disabled]) {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  }
`
