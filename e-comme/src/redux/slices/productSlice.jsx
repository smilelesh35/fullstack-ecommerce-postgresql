import axios from 'axios';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const initialState = {
    products: [],
    selectedProducts: {},
    search:""

}
export const getProducts = createAsyncThunk("getProddutc",async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data

})
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProducts = action.payload
        },
        setSearch: (state, action) => {
          state.search = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getProducts.fulfilled,(state,action)=> {
            state.products = action.payload;

        })
    }
})


export const {setSelectedProducts,setSearch} = productSlice.actions;
export default productSlice.reducer;