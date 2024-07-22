import Button from '../Button'
import { CardOptions, Title } from './styles'

type Props = {
  foto: string
  id: number
  nome: string
  descricao: string
  onMaisDetalhes: () => void
}

const Options = ({ foto, nome, descricao, onMaisDetalhes }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 198) + '...'
    }
    return descricao
  }

  return (
    <CardOptions>
      <img src={foto} alt={`Imagem do item ${nome}`} />
      <Title>{nome}</Title>
      <p>{getDescricao(descricao)}</p>
      <Button type="button" title="Mais detalhes" onClick={onMaisDetalhes}>
        Mais detalhes
      </Button>
    </CardOptions>
  )
}

export default Options
