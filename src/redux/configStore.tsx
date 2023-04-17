import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
export const store=configureStore({
    reducer:{
        user:(state='test')=>{
            return state
        }
    }
})

export type RootState=ReturnType<typeof store.getState>