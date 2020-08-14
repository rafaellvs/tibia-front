import styled from 'styled-components'

import CoreButton from 'app/components/core/Button'

export const Container = styled.div`
  display: flex;
`

export const Button = styled(CoreButton)`
  min-width: 30px;
  transform: ${({ active }) => active && 'scale(1.1)'};
`
