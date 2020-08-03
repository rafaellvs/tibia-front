import styled from 'styled-components'

import theme from 'app/helpers/theme'

import CoreText from 'app/components/core/Text'

export const Items = styled.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  opacity: 0;
  flex-direction: column;
  background: ${theme.colors.white};
  padding-top: ${theme.navbarHeight};
  top: 0;
  z-index: 1;
  transition: opacity .3s;
`

export const Container = styled.div`
  padding-right: 3rem;

  &:hover ${Items} {
    visibility: visible;
    opacity: 1;
  }
`

export const Text = styled(CoreText)`
  position: relative;
  z-index: 10;
  padding: 0 .7rem;
`
