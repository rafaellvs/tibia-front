import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const TooltipContainer = styled.div`
  display: inline-block;
  min-width: 100%;
  background: ${theme.colors.white};
  position: absolute;
  bottom: 100%;
  left: 0;
  white-space: nowrap;
  font-size: .7rem;
  text-align: left;
  padding: .5rem .8rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s;
`

export const Container = styled.div`
  /* position: relative; */

  &:hover ${TooltipContainer} {
    opacity: 1;
    visibility: visible;
  }
`
