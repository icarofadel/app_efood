import Button from '../Button'
import Tag from '../Tag'

import star from '../../assets/images/estrela.png'

import * as S from './style'

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
        <S.Card>
          <img src={capa} alt={capa} />
          <S.Infos>
            <Tag key={tipo}>{tipo}</Tag>
          </S.Infos>
          <S.SpaceDescription>
            <S.SpaceTitle>
              <h3>{titulo}</h3>
              <S.ContainerRating>
                <span>{avaliacao}</span>
                <img src={star} alt={star} />
              </S.ContainerRating>
            </S.SpaceTitle>
            <S.Description>{descricao}</S.Description>
            <Button
              type="link"
              to={`/restaurante/${id}`}
              title="Clique aqui para conhecer o cardapio"
            >
              Saiba mais
            </Button>
          </S.SpaceDescription>
        </S.Card>
      </li>
    </>
  )
}

export default Store
