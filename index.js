"use strict";
const cart = [
    {
        id: 11,
        name: "iPhone 14",
        price: 10000,
        category: "mobile",
    },
    {
        id: 12,
        name: "Hp Core i7",
        price: 20000,
        category: "Laptop",
    },
    {
        id: 13,
        name: "Laser Jet Pro 400",
        price: 15000,
        category: "Printer",
    },
];
function calculateTotalPrice(cart) {
    let total = 0;
    for (let product of cart) {
        total += product.price;
        console.log(`The price for ${product.name} in cart is: ${product.price}`);
    }
    console.log(`Total price for the all products in cart is: ${total}`);
    return total;
}
calculateTotalPrice(cart);
