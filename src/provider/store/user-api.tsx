import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints:(build)=>({
    register:build.mutation({
        query(body){
            return{
                url:"",
                method:"POST",
                body
            }
        }
    })
  })
});
export const {useRegisterMutation} = UserApi