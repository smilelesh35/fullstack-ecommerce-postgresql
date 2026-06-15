import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    authenticated: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {

    }
})


export const { } = loginSlice.actions;
export default loginSlice.reducer;