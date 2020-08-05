import React from 'react'
import PropTypes from 'prop-types'

import { Container, Button } from './styled'

const Navigation = ({ selected, setSelected, totalPages }) =>
  <Container>
    <Button
      onClick={() => setSelected(0)}
    >
      {'<<'}
    </Button>
    <Button
      disabled={selected === 0}
      onClick={() => setSelected(selected - 1)}
    >
      {'<'}
    </Button>

    <Button
      disabled={selected - 2 < 0}
      onClick={() => setSelected(selected - 2)}
    >
      {selected - 2 < 0 ? '-' : selected - 1}
    </Button>
    <Button
      disabled={selected - 1 < 0}
      onClick={() => setSelected(selected - 1)}
    >
      {selected - 1 < 0 ? '-' : selected - 0}
    </Button>
    <Button active>
      {selected + 1}
    </Button>
    <Button
      disabled={selected + 1 > totalPages - 1}
      onClick={() => setSelected(selected + 1)}
    >
      {selected + 1 > totalPages - 1 ? '-' : selected + 2}
    </Button>
    <Button
      disabled={selected + 2 > totalPages - 1}
      onClick={() => setSelected(selected + 2)}
    >
      {selected + 2 > totalPages - 1 ? '-' : selected + 3}
    </Button>

    <Button
      disabled={selected === totalPages - 1}
      onClick={() => setSelected(selected + 1)}
    >
      {'>'}
    </Button>
    <Button
      onClick={() => setSelected(totalPages - 1)}
    >
      {'>>'}
    </Button>
  </Container>

Navigation.propTypes = {
  selected: PropTypes.number,
  setSelected: PropTypes.func,
  totalPages: PropTypes.number,
}

export default Navigation
