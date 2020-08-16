import styled from 'styled-components'

import theme from 'app/helpers/theme'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'

export const Th = styled.th`
  position: relative;
  padding: .5rem .8rem;
  white-space: nowrap;
  transition: background .3s;

  &:hover {
    background: ${theme.colors.hover};
    cursor: pointer;
  }
`

export const HeaderText = styled(Text)`
  max-width: 70%;
  display: inline-block;
  vertical-align: middle;
`

export const SortIcon = styled(Image)`
  width: 10px;
  height: 10px;
  vertical-align: middle;
  margin-left: .5rem;
  transform: none;
  transition: transform .3s;
`
