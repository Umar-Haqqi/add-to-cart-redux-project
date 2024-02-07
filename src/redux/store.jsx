import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cardSlice,
        product: productSlice
    }
});

export default store;