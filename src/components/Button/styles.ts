import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  padding: 4px 7px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  width: 100%;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px;
  font-size: 14px;
  text-decoration: none;
`
