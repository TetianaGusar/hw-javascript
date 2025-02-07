function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }

    if (total > 100) {
        total *= 0.9; 
    }

    return total;
}

const cart1 = [
    {name: "Apple", price: 1, quantity: 10},
    {name: "Banana", price: 3, quantity: 5},
    {name: "Milk", price: 10, quantity: 2},
];

console.log(calculateTotal(cart1));

const cart2 = [
    {name: "Sushi", price: 20, quantity: 4},
    {name: "Burger Max", price: 30, quantity: 1},
];

console.log(calculateTotal(cart2)); 
