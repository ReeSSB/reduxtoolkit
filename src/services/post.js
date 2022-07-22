import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        getPostById: builder.query({
            query: (id) => {
                console.log("ID: ", id)
                return {
                    url: `posts/${id}`,
                    method: 'GET'
                }
            }
        }),
        getPostByLimit: builder.query({
            query: (num) => {
                console.log("Limit Number:", num)
                return {
                    url: `posts?_limit=${num}`,
                    method: 'GET'
                }
            }

        }),
        deletePost: builder.mutation({
            mutation: (id) => {
                console.log("Dlete ID:", id)
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'
                }
            }
        }),
        createPost: builder.mutation({
            query: (newPost) => {
                console.log("Created Post: ", newPost)
                return {
                    url: 'posts',
                    method: 'POST',
                    body: newPost,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }
            }
        }),

        updatePost: builder.mutation({
            query: (updatePost) => {
                const { id, ...data } = updatePost
                console.log("Update Post: ", updatePost)
                return {
                    url: `posts/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        })

    }),


})

export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi