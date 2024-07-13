import styled from 'styled-components'

import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const FooterBar = styled.footer`
  background-image: url(${fundo});
  color: ${cores.vermelho};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }
`

export const Text = styled.p`
  padding: 80px 0 40px;
  width: 480px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
