export function getCartState(state) {
    return state.cart.products;
}
export function getTotalQuantity(state) {
    const { products } = state.cart;
    return products.reduce((total, product) => total + product.quantity, 0);
}
export function getTotalPrice(state) {
    const { products } = state.cart;
    return products
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
}
