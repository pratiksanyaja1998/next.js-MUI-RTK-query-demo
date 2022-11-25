import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (param) => param,
    }),
  }),
})

export const { useGetUsersQuery  } = userSlice 