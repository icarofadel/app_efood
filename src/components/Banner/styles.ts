import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    color: ${cores.text};
    padding: 0 171px;
  }
`

export const Titulo = styled.h2`
  padding: 156px 0 32px;
  font-size: 32px;
  font-weight: 900;
`

export const Regiao = styled.p`
  padding-top: 24px;
  font-size: 32px;
  font-weight: 100;
`
