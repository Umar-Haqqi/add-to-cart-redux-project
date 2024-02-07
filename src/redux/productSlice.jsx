import { createSlice } from "@reduxjs/toolkit";

export const STATUS = {
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'loading'
}

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.SUCCESS
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setProduct,setStatus} = productSlice.actions
export default productSlice.reducer


// middleware to call api
export function fetchProducts() {
    return async function fetchProd(dispatch){
        dispatch()
    }
}
