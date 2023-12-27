import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT } from "../constant";

export const getproduct=createAsyncThunk("getproduct", async ()=>{
   return axios.get(BASE_URL+GET_PRODUCT).then((res)=>{
        const data=res.data
        return{
            data,
        }
    })
})

export const deleteproduct=createAsyncThunk("deleteproduct", async (id)=>{
   return axios.delete(BASE_URL+DELETE_PRODUCT+id).then((res)=>{
        const data=res.data
        console.log(id);
        return id
    })
})