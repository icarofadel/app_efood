import { HeaderBar, Logo } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <Logo>
      <img src={logo} alt="efood" />
    </Logo>
  </HeaderBar>
)

export default Header
