import Cardapio from '../../models/cardapio'
import Options from '../Cardapio'

import { ContainerOptions, List } from './styles'

export type Props = {
  title: string
  cardapio: Cardapio[]
}

const CardapioList = ({ cardapio }: Props) => (
  <ContainerOptions>
    <div className="container">
      <List>
        {cardapio.map((cardapio) => (
          <Options
            key={cardapio.id}
            imagem={cardapio.imagem}
            title={cardapio.title}
            description={cardapio.description}
            button={''}
          />
        ))}
      </List>
    </div>
  </ContainerOptions>
)

export default CardapioList
