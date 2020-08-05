import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import { Container, Button, Content } from './styled'

const AccordionCell = ({ content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const resultsToShow = 4

  useEffect(() => {
    active
      ? setHeight(ref.current.scrollHeight)
      : setHeight(0)
  }, [active])

  return (
    <Container>
      {content.slice(0, resultsToShow)
        .map((item, i) =>
          <Text key={i} variant='hideOverflow'>
            {item},
          </Text>
        )}

      {
        content.length > resultsToShow &&
          <>
            <Button
              key='button'
              onClick={() => setActive(!active)}
            >
              {`${content.slice(resultsToShow).length} more... ${active ? '\u21B0' : '\u21B4'}`}
            </Button>

            <Content ref={ref} height={height}>
              {content.slice(resultsToShow)
                .map((item, i) =>
                  <Text key={i} variant='hideOverflow'>
                    {item},
                  </Text>
                )}
            </Content>
          </>
      }
    </Container>
  )
}

AccordionCell.propTypes = {
  content: PropTypes.array,
}

export default AccordionCell
