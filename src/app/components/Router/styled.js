import styled from 'styled-components'

import bg from 'assets/images/bg.jpg'

import theme from 'app/helpers/theme'

import CoreSection from 'app/components/core/Section'

export const Section = styled(CoreSection)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: top / cover no-repeat fixed url(${bg});
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding-top: calc(${theme.navbarHeight} + 6rem);
  padding-bottom: 6rem;
  max-width: 1200px;
`

export const Container = styled.div`
  background: ${theme.colors.background};
  padding: 3rem;
  box-shadow: ${theme.boxShadow.default};
`
