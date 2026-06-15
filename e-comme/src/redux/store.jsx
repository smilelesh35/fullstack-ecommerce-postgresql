import {configureStore} from "@reduxjs/toolkit";
import productReducer from './slices/productSlice.jsx'
import basketReducer from "./slices/basketSlice.jsx";
import loginReducer from "./slices/loginSlice.jsx"
export const store = configureStore({
    reducer: {
        products : productReducer,
        basket: basketReducer,
        login: loginReducer
    }
})

export default store;