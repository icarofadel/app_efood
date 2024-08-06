import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${cores.vermelho};
  position: relative;
  margin-bottom: 48px;
  padding-bottom: 2px;
  color: ${cores.vermelho};

  ${TagContainer} {
    margin-right: 8px;
  }

  > img {
    width: 100%;
    height: 218px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const SpaceDescription = styled.div`
  padding: 8px;
  line-height: 21px;
`

export const SpaceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  span {
    font-size: 18px;
  }
`

export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Description = styled.p`
  padding: 16px 0;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`
