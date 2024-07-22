import styled from 'styled-components'
import { cores } from '../../styles'

export const CardOptions = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  margin-bottom: 32px;
  padding: 8px;
  border-radius: 8px;

  p {
    font-size: 14px;
    margin: 8px 0;
  }

  img {
    width: 304px;
    height: 167px;
    border-radius: 8px;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`
