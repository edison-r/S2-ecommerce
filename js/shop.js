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

function capitalizeString(str){
    const firstLetter = str.charAt(0).toUpperCase();
    const restString = str.slice(1);
    return firstLetter + restString;
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
    let subtotal = 0;
    let applicableDiscount = false;

    cart.forEach((prod) => {
        if(prod.offer && prod.quantity >= prod.offer.number) 
            applicableDiscount = true;
    });

    applicableDiscount ? 
        subtotal = applyPromotionsCart() : 
        cart.forEach((prod) => subtotal += prod.price * prod.quantity);

    console.log(`Total: ${subtotal}`);
    updatePage("total_price", subtotal);

    return subtotal;
}

// Exercise 4
function applyPromotionsCart(){
    let subtotalWithDiscount = 0;

    cart.forEach((prod) => {
        if(prod.offer && prod.quantity >= prod.offer.number){
            const discount = prod.price * (prod.offer.percent / 100);
            const discountedPrice = prod.price - discount;
            subtotalWithDiscount +=  discountedPrice * prod.quantity;
        } else {
            subtotalWithDiscount += prod.price * prod.quantity;
        }
    });
    console.log(`Subtotal con descuento: ${subtotalWithDiscount.toFixed(2)}`);
    return subtotalWithDiscount.toFixed(2);
}
// Exercise 5
window.printCart = function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartTableBody = document.getElementById("cart_list");
    const cartPriceElement = document.getElementById("total_price");
    
    cart.forEach((prod) => {
        let row = document.createElement("tr");
        const productName = capitalizeString(prod.name);
        const productPrice = ;
        const productQty = ;
        const subtotal = prod.quantity * prod.price;

        const product = cart.find((product) => product.id === id);

        if(!product){
            row.innerHTML=`
                <th scope="row">${productName}</th>
                <td>$${productPrice}</td>
                <td class="text-center">${productQty}</td>
                <td>$${subtotal}</td>
            `;
            cartTableBody.appendChild(row);
        } else {

        }
    });
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

window.open_modal = function open_modal() {
    printCart();
}