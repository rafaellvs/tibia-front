import React from 'react'

import loading from 'assets/images/loading.gif'

import Image from 'app/components/core/Image'

import { Container } from './styled'

const Loading = () =>
  <Container>
    <Image src={loading} />
  </Container>

export default Loading
