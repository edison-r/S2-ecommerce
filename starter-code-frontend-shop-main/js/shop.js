import { products } from "./products.js";

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

window.buy = function buy(id) {
    const addProduct = (id) => {
        const product = products.find((product) => product.id === id);
        if(product) {
            const newCartItem = {
                ...product,
                quantity: 1,
            }
            cart.push(newCartItem);
            console.log(`${product.name} added to cart`);
        }
    }

    const cartItem = cart.find((item) => item.id === id);
    
    if(cartItem) {
        cartItem.quantity += 1;
        console.log(`Quantity of ${cartItem.name} in cart: ${cartItem.quantity}`);
    } else {
        addProduct(id);
    }

      console.log("Cart:", cart);

}

// Exercise 2
function cleanCart() {

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}