import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  prato: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  prato: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const cardapio = state.prato.find(
        (prato) => prato.id === action.payload.id
      )

      if (!cardapio) {
        state.prato.push(action.payload)
      } else {
        alert('Prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.prato = state.prato.filter((prato) => prato.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    },

    clear: (state) => {
      state.prato = []
    }
  }
})

export const { add, remove, open, close, clear } = CartSlice.actions
export default CartSlice.reducer
