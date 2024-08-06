import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <div className="container">
      <img src={logo} alt="efood" />
    </div>
    <div>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={instagram} alt="twitter" />
      </a>
      <a href="#">
        <img src={facebook} alt="twitter" />
      </a>
    </div>
    <div>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.Text>
    </div>
  </S.FooterBar>
)

export default Footer
