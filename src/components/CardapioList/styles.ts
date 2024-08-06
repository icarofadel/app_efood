import styled from 'styled-components'
import { breakponints, cores } from '../../styles'

export const ContainerOptions = styled.section`
  padding: 80px 0 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakponints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  header {
    display: flex;
    flex-direction: row-reverse;
    padding: 8px;
  }

  .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.73);
    }
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.text};
  max-width: 1024px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakponints.tablet}) {
    max-width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;

    > img {
      cursor: pointer;
    }
  }

  .conteudo {
    display: flex;
    padding: 0 32px 32px;

    @media (max-width: ${breakponints.tablet}) {
      display: block;
    }

    img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;

      @media (max-width: ${breakponints.tablet}) {
        width: 100%;
      }
    }
  }

  div {
    p {
      margin: 16px 0;
      font-size: 14px;
      line-height: 22px;
    }

    > button {
      width: 230px;
      font-size: 14px;

      @media (max-width: ${breakponints.tablet}) {
        width: 100%;
      }
    }
  }
`
