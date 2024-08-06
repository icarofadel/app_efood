import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getItaliana: builder.query<CardapioItem, void>({
      query: () => '/restaurantes/Bella-Tavola-Italiana'
    }),
    getArabe: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes/Casa-das-Delicias-Arabes'
    }),
    getJapones: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes/Sakura-Sushi-House'
    }),
    getPortugues: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes/Cantinho-Lusitano'
    }),
    getPizza: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes/Piazza-del-Forno'
    }),
    getVegano: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes/Jardim-da-Terra'
    }),
    getPrato: builder.query<CardapioItem, string>({
      query: (id) => `prato/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetItalianaQuery,
  useGetArabeQuery,
  useGetJaponesQuery,
  useGetPortuguesQuery,
  useGetPizzaQuery,
  useGetPratoQuery,
  usePurchaseMutation
} = api

export default api
