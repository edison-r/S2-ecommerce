import { products } from "./products.js";

var cart = [];
var total = 0;

updatePage("cart_list", "")
updatePage("total_price", 0)

// Funciones propias reutilizables

function updatePage(id, newValue){
    const element = document.getElementById(id);
    if (element) element.innerHTML = newValue;
}

function updateCartDom(){
    let totalProd = 0;
    cart.forEach((prod) => totalProd += prod.quantity);
    updatePage("count_product", totalProd);
}

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

    updateCartDom();
    calculateTotal();
}

// Exercise 2
window.cleanCart = function cleanCart() {
    console.log("Cart:", cart);
    let deletedItems = cart.splice(0, cart.length); // uso este método para añadir un feature de "te puede interesar..."

    console.log("Deleted Items from Cart:", deletedItems);
    console.log("Cart:", cart);

    updatePage("count_product", cart.length);
    updatePage("cart_list", "");
    updatePage("total_price", 0);
}

// Exercise 3
function calculateTotal() {
    let totalPrice = 0;
    cart.forEach((prod) => totalPrice += prod.price * prod.quantity );
    updatePage("total_price", totalPrice);
    
    console.log(`Total: ${totalPrice}`);
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
}

// Exercise 5
window.printCart = function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

window.open_modal = function open_modal() {
    printCart();
}