import Restaurant from '../../models/restaurant'
import Store from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  title: string
  restaurant: Restaurant[]
}

const RestaurantsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Store
            key={restaurant.id}
            imagem={restaurant.imagem}
            category={restaurant.category}
            title={restaurant.title}
            description={restaurant.description}
            infos={restaurant.infos || []}
            rating={restaurant.rating || ''}
            star={restaurant.star}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
