import styled from 'styled-components'

import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  color: ${cores.vermelho};
  height: 384px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }
`

export const Title = styled.h1`
  width: 540px;
  margin: 138px auto 40px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
`
