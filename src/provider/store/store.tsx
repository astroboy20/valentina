import {configureStore} from "@reduxjs/toolkit"
import { UserApi } from "./user-api";
export const store = configureStore({
reducer:{
    [UserApi.reducerPath]:UserApi.reducer
},
middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(UserApi.middleware);
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;