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

interface Item {
  name: string;
  price: number;
}

interface ShoppingCart {
  addItem(item: Item): void;
  removeItem(item: Item): void;
  displayTotalPrice(): number;
  displayTotalItems(): number;
  displayCart(): Item[];
}

class ShoppingCart implements ShoppingCart {
  cart: Item[];

  constructor(items: Item[]) {
    this.cart = items;
  }

  addItem(item) {
    if (this.cart.length > 10) {
      throw new Error("You can only have 10 items in your cart");
    }
    this.cart.push(item);
  }

  removeItem(item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].name === item.name) {
        this.cart.splice(i, 1);
        return;
      }
    }
  }

  displayTotalPrice() {
    let totalPrice = 0;
    this.cart.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }

  displayTotalItems() {
    return this.cart.length;
  }

  displayCart() {
    return this.cart;
  }
}

const cart = new ShoppingCart([
  { name: "apple", price: 0.5 },
  { name: "banana", price: 0.75 },
  { name: "orange", price: 1.25 },
]);

console.log("===== initial cart =====");
console.log("total price: ", cart.displayTotalPrice());
console.log("total items: ", cart.displayTotalItems());
console.log("cart: ", cart.displayCart());

cart.addItem({ name: "grape", price: 3 });
cart.removeItem({ name: "apple", price: 0.5 });

console.log("\n\n===== after adding and removing items =====");
console.log("total price: ", cart.displayTotalPrice());
console.log("total items: ", cart.displayTotalItems());
console.log("cart: ", cart.displayCart());
