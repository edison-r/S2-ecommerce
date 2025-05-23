import { products } from "./products.js";

const cart = [];

updatePage("total_price", 0)

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

window.buy = function buy(id) {
    const addProduct = (id) => {
        const product = products.find((product) => product.id === id);
        if(product) {
            const newCartItem = {
                ...product,
                quantity: 1,
            }
            cart.push(newCartItem);
        }
    }

    const cartItem = cart.find((item) => item.id === id);
    
    if(cartItem) {
        cartItem.quantity += 1;
    } else {
        addProduct(id);
    }

    updateCartDom();
    calculateTotal();
}

window.cleanCart = function cleanCart() {
    let deletedItems = cart.splice(0, cart.length);

    deletedItems;
    updatePage("count_product", cart.length);
    updatePage("cart_list", "");
    updatePage("total_price", 0);
}

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

    updatePage("total_price", subtotal);

    return subtotal;
}

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
    return subtotalWithDiscount.toFixed(2);
}

window.printCart = function printCart() {
    const cartTableBody = document.getElementById("cart_list");
    const cartPriceElement = document.getElementById("total_price");

    updatePage("cart_list", "")

    let totalPrice = 0;
    
    cart.forEach((prod) => {
        const productName = capitalizeString(prod.name);
        let subtotal = prod.quantity * prod.price;
        
        if(prod.offer && prod.quantity >= prod.offer.number){
            const discount = prod.price * (prod.offer.percent / 100);
            const discountedPrice = prod.price - discount;
            subtotal =  discountedPrice * prod.quantity;
        }
        
        totalPrice += subtotal;

        let row = document.createElement("tr");

        row.innerHTML=`
            <th scope="row">${productName}</th>
            <td>$${prod.price}</td>
            <td class="text-center">${prod.quantity}</td>
            <td class="text-center">$${subtotal.toFixed(2)}</td>
        `;
        cartTableBody.appendChild(row);
    });

    cartPriceElement.textContent = `${totalPrice.toFixed(2)}`
}

window.open_modal = function open_modal() {
    printCart();
}

/* ** Nivell II **

// Exercise 7
function removeFromCart(id) {

} */
