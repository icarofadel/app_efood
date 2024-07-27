import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getItaliana: builder.query<CardapioItem, void>({
      query: () => 'Bella-Tavola-Italiana'
    }),
    getArabe: builder.query<CardapioItem[], void>({
      query: () => 'Casa-das-Delicias-Arabes'
    }),
    getJapones: builder.query<CardapioItem[], void>({
      query: () => 'Sakura-Sushi-House'
    }),
    getPortugues: builder.query<CardapioItem[], void>({
      query: () => 'Cantinho-Lusitano'
    }),
    getPizza: builder.query<CardapioItem[], void>({
      query: () => 'Piazza-del-Forno'
    }),
    getVegano: builder.query<CardapioItem[], void>({
      query: () => 'Jardim-da-Terra'
    }),
    getPrato: builder.query<CardapioItem, string>({
      query: (id) => `prato/${id}`
    })
  })
})

export const {
  useGetItalianaQuery,
  useGetArabeQuery,
  useGetJaponesQuery,
  useGetPortuguesQuery,
  useGetPizzaQuery,
  useGetPratoQuery
} = api

export default api
