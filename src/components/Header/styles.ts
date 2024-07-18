import styled from 'styled-components'

import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  color: ${cores.vermelho};
  padding-top: 40px;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  padding: 138px 0 40px;
  width: 540px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
`
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 65px;

  a {
    text-decoration: none;
    color: ${cores.vermelho};
  }
`
