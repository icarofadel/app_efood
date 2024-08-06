import styled from 'styled-components'
import { breakponints } from '../../styles'

export const Container = styled.section`
  padding: 80px 0 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakponints.tablet}) {
    grid-template-columns: 1fr;
  }
`
