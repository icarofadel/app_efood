import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px;
  font-size: 14px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px;
  font-size: 14px;
  text-decoration: none;
`
