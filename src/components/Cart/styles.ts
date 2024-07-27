import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px;
  font-size: 18px;
  font-weight: bold;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    background-color: ${cores.begeEscuro};
    font-size: 14px;
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.bege};
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.begeEscuro};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`
