import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CardapioItem } from '../../pages/Home'
import Options from '../Cardapio'
import Button from '../Button'
import { add, open } from '../../store/reducers/cart'
import close from '../../assets/images/close.png'

import * as S from './styles'

type Props = {
  cardapio: CardapioItem[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardapioList = ({ cardapio }: Props) => {
  const [modal, setModal] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<CardapioItem | null>(
    null
  )

  const abrirModal = (item: CardapioItem) => {
    setItemSelecionado(item)
    setModal(true)
  }

  const fecharModal = () => {
    setModal(false)
    setItemSelecionado(null)
  }

  const dispatch = useDispatch()

  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
      <S.ContainerOptions>
        <div className="container">
          <S.List>
            {cardapio.map((item) => (
              <Options
                key={item.id}
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                id={item.id}
                onMaisDetalhes={() => abrirModal(item)}
              />
            ))}
          </S.List>
        </div>
      </S.ContainerOptions>
      {itemSelecionado && (
        <S.Modal className={modal ? 'visivel' : ''}>
          <S.ModalContent>
            <header className="fechar">
              <img src={close} alt="Fechar" onClick={fecharModal} />
            </header>
            <div className="conteudo">
              <img
                src={itemSelecionado.foto}
                alt={`Imagem do item ${itemSelecionado.nome}`}
              />
              <div>
                <h2>{itemSelecionado.nome}</h2>
                <p>{itemSelecionado.descricao}</p>
                <p>{itemSelecionado.porcao}</p>
                <Button
                  type="button"
                  onClick={() => addToCart(itemSelecionado)}
                  title={`Adicionar ao carrinho - ${formataPreco(
                    itemSelecionado.preco
                  )}`}
                >
                  {`Adicionar ao carrinho - ${formataPreco(
                    itemSelecionado.preco
                  )}`}
                </Button>
              </div>
            </div>
          </S.ModalContent>
          <div className="overlay" onClick={fecharModal}></div>
        </S.Modal>
      )}
    </>
  )
}

export default CardapioList
