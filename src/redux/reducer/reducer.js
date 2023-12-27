import { createSlice } from "@reduxjs/toolkit"
import { deleteproduct, getproduct } from "../api/api";

const initalstate={
    isLoding:false,
    data:[],
    isError:false,
}

const productsilce=createSlice({
    name:"product",
    initialState:initalstate,
    extraReducers:(builder)=>{

        builder.addCase(getproduct.pending,(state,action)=>{
            state.isLoding=true;
        })
        builder.addCase(getproduct.fulfilled,(state,action)=>{
            state.isLoding=false;
            state.data=action.payload.data
        })
        builder.addCase(getproduct.rejected,(state,action)=>{
            state.isError=true;
        })

        // delete productyty


        builder.addCase(deleteproduct.pending,(state,action)=>{
            state.isLoding=true;
        })
        builder.addCase(deleteproduct.fulfilled,(state,action)=>{
            state.isLoding=false;
            state.data=state.data.filter((e)=>e.id!==action.payload)
        })
        builder.addCase(deleteproduct.rejected,(state,action)=>{
            state.isError=true;
        })

    }
})

export default productsilce.reducer;