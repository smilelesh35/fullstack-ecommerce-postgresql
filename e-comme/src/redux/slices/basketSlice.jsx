import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = "http://localhost:3000/users/basket";
const getToken = () => {
    return localStorage.getItem("token");
}

export const getBasket =createAsyncThunk ("basket/getBasket",async() => {
    const token = getToken();

    const response = await axios.get(API_URL,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data;
})

export const addToBasket =createAsyncThunk ("basket/addToBasket",async(payload) => {
    const token = getToken();
    const response = await axios.post(API_URL,{
        product_id: Number(payload.id),
        title: payload.title,
        price: payload.price,
        image: payload.image,
        count: payload.count || 1

    },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
    return response.data;
})

export const deleteBasket = createAsyncThunk("basket/deleteBasket", async (basketId) => {
    const token = getToken();

    await axios.delete(`${API_URL}/${basketId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return basketId;
});

const initialState = {
    baskets: [],
    totalAmount:0,
    loading: false,
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
       clearBasket: (state, action) => {
           state.baskets = [];
               state.totalAmount = 0
       },
        calculateTotalAmount: (state, action) => {
           state.totalAmount = state.baskets.reduce((total,item)=>{
               return total + Number(item.price) * item.count;
           },0);
        }

    },
    extraReducers:(builder) => {
        builder.addCase(getBasket.pending,(state) =>{
            state.loading = true;
        })
        builder.addCase(getBasket.fulfilled,(state,action) =>{
            state.loading = false;
            state.baskets = action.payload;

            state.totalAmount = state.baskets.reduce((total,item)=>{
                return total + Number(item.price) * item.count;
            },0)
        })
            .addCase(addToBasket.fulfilled , (state, action) => {
                    const addedProduct = action.payload;
                    const findedProduct = state.baskets.find((item) => item.product_id = addedProduct.product_id);

                    if (findedProduct) {
                        addedProduct.count += findedProduct.count;
                    }
                    else{
                        state.baskets.push(addedProduct);
                    }

                    state.totalAmount = state.baskets.reduce((total,item)=>{
                        return total + Number(item.price) * item.count;
                    })

            })
            .addCase(deleteBasket.fulfilled , (state, action) => {
                state.baskets = state.baskets.filter((item)=>item.id !== action.payload);

                state.totalAmount = state.baskets.reduce((total, item) => {
                    return total + Number(item.price) * item.count;
                }, 0);

            })
    }
})


export const { clearBasket,calculateTotalAmount} = basketSlice.actions;
export default basketSlice.reducer;