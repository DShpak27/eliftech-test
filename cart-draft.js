const shoppingCart = {
    items: [
        {
            id: 1,
            name: "Product A",
            price: 20.99,
            quantity: 2,
            store: "Store A",
        },
        {
            id: 2,
            name: "Product B",
            price: 15.49,
            quantity: 1,
            store: "Store B",
        },
        {
            id: 3,
            name: "Product C",
            price: 10.0,
            quantity: 3,
            store: "Store C",
        },
    ],
};

// Додавання нового товару в корзину
const newItem = {
    id: 4,
    name: "Product D",
    price: 25.99,
    quantity: 1,
    store: "Store A",
};

shoppingCart.items.push(newItem);

// видалення товару з корзини за його ідентифікатором
const itemIdToRemove = 2;
shoppingCart.items = shoppingCart.items.filter((item) => item.id !== itemIdToRemove);

// Виведення загальної суми покупок
const totalAmount = shoppingCart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

console.log(shoppingCart);
console.log("Total Amount:", totalAmount);

export const obj = {
    products: [
        { id: 1, name: "Product A", price: 20.99 },
        { id: 2, name: "Product B", price: 15.49 },
        // інші товари
    ],
};

export const shoppingCart2 = {
    customer: {
        id: 123,
        name: "John Doe",
        email: "john@example.com",
        address: "123 Main St, Cityville, USA",
        // інші дані покупця
    },
    items: [
        {
            id: 1,
            name: "Product A",
            price: 20.99,
            quantity: 2,
            store: "Store A",
        },
        {
            id: 2,
            name: "Product B",
            price: 15.49,
            quantity: 1,
            store: "Store B",
        },
        {
            id: 3,
            name: "Product C",
            price: 10.0,
            quantity: 3,
            store: "Store C",
        },
        // ... можуть бути інші товари з різних магазинів
    ],
};

// Приклад оновлення даних покупця
shoppingCart.customer.email = "newemail@example.com";

console.log(shoppingCart);
