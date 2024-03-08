import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart: (state, { payload }) => {
            const isProductInCart = state.products.some((product) => product.id === payload.id);
            if (isProductInCart) {
                state.products.forEach((product) => {
                    if (product.id === payload.id) {
                        product.quantity += 1;
                    }
                });
            } else {
                state.products.push(payload);
            }
        },
        changeQuantity: (state, action) => {
            const { id, newQuantity } = action.payload;
            state.products.forEach((product) => {
                if (product.id === id) {
                    product.quantity = newQuantity;
                }
            });
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            state.products = [...state.products.filter((product) => product.id !== id)];
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, changeQuantity, deleteItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
