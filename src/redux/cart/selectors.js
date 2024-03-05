export function getCartState(state) {
    return state.cart;
}
export function getTotalQuantity(state) {
    const { items } = state.cart;
    return items.reduce((total, item) => total + item.quantity, 0);
}
export function getTotalPrice(state) {
    const { items } = state.cart;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
