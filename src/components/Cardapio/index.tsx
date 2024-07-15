import Button from '../Button'
import { CardOptions, Title } from './styles'

type Props = {
  imagem: string
  title: string
  description: string
  button: string
}

const Options = ({ imagem, title, description }: Props) => (
  <li>
    <CardOptions>
      <img src={imagem} alt={imagem} />
      <Title>{title}</Title>
      <p>{description}</p>
      <Button type={'button'} title={'Adicionar ao carrinho'}>
        Adicionar ao carrinho
      </Button>
    </CardOptions>
  </li>
)

export default Options
