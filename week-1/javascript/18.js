/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

let cart = [
    {name: "Banana", price: 123},
    {name: "PineApple", price: 456},
    {name: "WaterMelon", price: 789},
    {name: "Orange", price: 987},
];

function AddToCart(items){
    if(cart.length == 10){
        return "Cart is full.";
    }
    cart.push(items);

    return cart;
}

function removeFromCart(name){
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name.toLowerCase() == name.toLowerCase()){
            cart = cart.filter(obj => obj.name.toLocaleLowerCase() !== name.toLowerCase());
        }
    }
    return cart;
}

function totalPrice() {
    let TotalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        TotalPrice += cart[i].price
    }
    return TotalPrice;
}

function totalItems(){
    return cart.length;
}

// console.log(AddToCart(
//     {name:"Apple", price:200}
// ));

// console.log(removeFromCart("PineApple"))

// console.log(totalPrice());

console.log(totalItems());