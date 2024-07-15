import Button from '../Button'
import Tag from '../Tag'

import {
  Card,
  Description,
  Infos,
  ContainerRating,
  SpaceTitle,
  SpaceDescription
} from './style'

type Props = {
  imagem: string
  infos: string[]
  category: string
  title: string
  description: string
  rating: string
  star: string
}

const Store = ({
  imagem,
  infos,
  category,
  title,
  description,
  rating,
  star
}: Props) => (
  <li>
    <Card>
      <img src={imagem} alt={imagem} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
        <Tag>{category}</Tag>
      </Infos>
      <SpaceDescription>
        <SpaceTitle>
          <h3>{title}</h3>
          <ContainerRating>
            <span>{rating}</span>
            <img src={star} alt={star} />
          </ContainerRating>
        </SpaceTitle>
        <Description>{description}</Description>
        <Button
          type="link"
          to="/cardapio"
          title="Clique aqui para conhecer o cardapio"
        >
          Saiba mais
        </Button>
      </SpaceDescription>
    </Card>
  </li>
)

export default Store
