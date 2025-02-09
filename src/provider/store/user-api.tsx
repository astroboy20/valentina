import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://go-socket-chat.onrender.com",
  }),
  endpoints:(build)=>({
    register:build.mutation({
        query(body){
            return{
                url:"/name",
                method:"POST",
                body
            }
        }
    }),
    login:build.mutation({
      query(body){
        return{
          url:"/name",
          method:"POST",
          body
      }
      }
    })
  })
});
export const {useRegisterMutation, useLoginMutation} = UserApi