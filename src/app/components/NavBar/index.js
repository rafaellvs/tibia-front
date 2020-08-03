import React from 'react'
import pluralize from 'pluralize'

import entities from 'app/helpers/entities'

import DropdownLink from 'app/components/core/DropdownLink'
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
                    <DropdownLink key={index} href={entity.url}>
                      {pluralize(entity.name)}
                    </DropdownLink>
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
