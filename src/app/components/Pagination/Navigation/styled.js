import styled from 'styled-components'

import CoreButton from 'app/components/core/Button'

export const Container = styled.div`
  display: flex;
  padding: .5rem 0 1rem;
`

export const Button = styled(CoreButton)`
  transform: ${({ active }) => active && 'scale(1.1)'};
`
