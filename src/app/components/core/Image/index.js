import React from 'react'
import PropTypes from 'prop-types'

import { StyledImage } from './styled'

const Image = ({ src, width, className, ...restProps }) =>
  <StyledImage
    src={src}
    width={width}
    className={className}
    {...restProps}
  />

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
}

export default Image
