import { HeaderBar, Title } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="efood" />
    </div>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderBar>
)

export default Header
