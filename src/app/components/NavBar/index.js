import React from 'react'
import pluralize from 'pluralize'

import entities from 'app/helpers/entities'

import Link from 'app/components/core/Link'
import Dropdown from 'app/components/core/Dropdown'

import { Container } from './styled'

const NavBar = () => {
  const categories =
    Array.from(
      new Set(
        entities.map(entity => entity.category)
      )
    )

  return (
    <Container id='navbar'>
      {
        categories.map((category, i) => {
          return (
            <Dropdown key={i} title={category}>
              {
                entities.map((entity, index) =>
                  entity.category === category &&
                    <Link key={index} href={entity.url}>
                      {pluralize(entity.name)}
                    </Link>
                )
              }
            </Dropdown>
          )
        }
        )
      }
    </Container>
  )
}

export default NavBar
