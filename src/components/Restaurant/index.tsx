import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/estrela.png'

import {
  Card,
  Description,
  Infos,
  ContainerRating,
  SpaceTitle,
  SpaceDescription
} from './style'

type Props = {
  id: number
  titulo: string
  destacado?: string[]
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Store = ({ id, titulo, tipo, avaliacao, descricao, capa }: Props) => {
  return (
    <>
      <li>
        <Card>
          <img src={capa} alt={capa} />
          <Infos>
            <Tag key={tipo}>{tipo}</Tag>
          </Infos>
          <SpaceDescription>
            <SpaceTitle>
              <h3>{titulo}</h3>
              <ContainerRating>
                <span>{avaliacao}</span>
                <img src={star} alt={star} />
              </ContainerRating>
            </SpaceTitle>
            <Description>{descricao}</Description>
            <Button
              type="link"
              to={`/restaurante/${id}`}
              title="Clique aqui para conhecer o cardapio"
            >
              Saiba mais
            </Button>
          </SpaceDescription>
        </Card>
      </li>
    </>
  )
}

export default Store
