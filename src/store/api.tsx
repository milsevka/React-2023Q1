import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCard } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getCards: builder.query<TCard[], string>({
      query: (input) => `/?name=${input}`,
      transformResponse: (response: { results: TCard[] }) => {
        return response.results;
      },
    }),
    getModalCard: builder.query<TCard, string | null>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetModalCardQuery } = apiSlice;
