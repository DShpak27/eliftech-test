import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    products: [],
};

//   {
//         id: 1,
//         name: "Product A",
//         price: 20.99,
//         quantity: 2,
//         store: "Store A",
//     },

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
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
            const { id } = action.payload;
            state.products = state.products.filter((product) => product.id === id);
        },
    },
});

export const { addToCart, changeQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
