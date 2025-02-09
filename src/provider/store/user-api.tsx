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
    }),
    payment:build.query<any, {reference:string | any}>({
      query({reference}){
        return{
          url:"/verify-payment/",
          method:"GET",
          params:{
            reference:reference
          }
      }
      }
    })
  })
});
export const {useRegisterMutation, useLoginMutation, usePaymentQuery} = UserApi