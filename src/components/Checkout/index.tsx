import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '../Button'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco, getTotalPrice } from '../../utils'
import { clear, close } from '../../store/reducers/cart'
import InputMask from 'react-input-mask'

type CheckoutProps = {
  onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { prato } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberHouse: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa estar completo')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O endereço precisa estar completo')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa estar completo')
        .required('O campo é obrigatório'),
      numberHouse: Yup.string()
        .min(1, 'O endereço precisa estar completo')
        .required('O campo é obrigatório'),

      //Pagamento
      cardName: Yup.string()
        .min(5, 'O nome precisa estar completo')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O nome precisa estar completo')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .max(3, 'O nome precisa estar completo')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'O nome precisa estar completo')
        .max(12)
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O nome precisa estar completo')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberHouse)
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },

        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorInput = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const temErro = estaAlterado && estaInvalido

    return temErro
  }

  if (prato.length === 0) {
    return (
      <S.CampoForm>
        <div className="container">
          <p>O carrinho está vazio, selecione alguns produtos primeiro</p>
        </div>
      </S.CampoForm>
    )
  }

  const CloseCart = () => {
    dispatch(close())
  }

  const ClearCart = () => {
    dispatch(clear())
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <>
          <S.CampoForm>
            <S.Title>Pedido realizado - {data.orderId}</S.Title>
            <div className="container">
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </div>
            <Button
              type="button"
              title={''}
              onClick={() => {
                CloseCart()
                ClearCart()
              }}
            >
              Concluir
            </Button>
          </S.CampoForm>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.CampoForm>
            {payWithCard ? (
              <>
                <div>
                  <S.Title>
                    Pagamento - Valor a pagar{' '}
                    {formataPreco(getTotalPrice(prato))}
                  </S.Title>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorInput('cardName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('cardNumber') ? 'error' : ''}
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('cardCode') ? 'error' : ''}
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('expiresMonth') ? 'error' : ''}
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('expiresYear') ? 'error' : ''}
                        mask="9999"
                      />
                    </S.InputGroup>
                  </S.Row>
                </div>
                <Button type="submit" title={''}>
                  Concluir com o pagamento
                </Button>
                <Button
                  type="button"
                  title={''}
                  onClick={() => setPayWithCard(false)}
                >
                  Voltar para a edição do endereço
                </Button>
              </>
            ) : (
              <>
                <S.Title>Entrega</S.Title>
                <div>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorInput('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorInput('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={getErrorInput('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('zipCode') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="numberHouse">Número</label>
                      <input
                        type="text"
                        id="numberHouse"
                        name="numberHouse"
                        value={form.values.numberHouse}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getErrorInput('numberHouse') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                </div>
                <Button
                  type="submit"
                  title={''}
                  onClick={() => setPayWithCard(true)}
                >
                  Continuar com o pagamento
                </Button>
                <Button type="button" title={''} onClick={onBackToCart}>
                  Voltar para o carrinho
                </Button>
              </>
            )}
          </S.CampoForm>
        </form>
      )}
    </div>
  )
}

export default Checkout
