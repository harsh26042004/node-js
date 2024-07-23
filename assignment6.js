// // Q1)
// function addToCart(name, price, quantity) {
//     if (!name) {
//       throw new Error("Product name is required.");
//     }
//     if (price <= 0) {
//       throw new Error("Invalid product price.");
//     }
//     if (!Number.isInteger(quantity) || quantity <= 0) {
//       throw new Error("Invalid quantity.");
//     }
//     // Add product to cart logic here (not implemented in this example)
//   }
  
//   function checkout() {
//     // Check if the cart is empty
//     if (cartIsEmpty()) { // Assuming cartIsEmpty() is a function that checks cart emptiness
//       throw new Error("Cart is empty. Add items before checkout.");
//     }
//     // Checkout logic here (not implemented in this example)
//   }

// // Q2)
// function addToCart(name, price, quantity) {
//     if (!name) {
//       throw new Error("Product name is required.");
//     }
//     if (price <= 0) {
//       throw new Error("Invalid product price.");
//     }
//     if (!Number.isInteger(quantity) || quantity <= 0) {
//       throw new Error("Invalid quantity.");
//     }
//     // Add product to cart logic (not implemented here)
//   }
  
//   function checkout() {
//     // Check if the cart is empty
//     if (/* cart is empty */) {
//       throw new Error("Cart is empty. Add items before checkout.");
//     }
//     // Checkout logic (not implemented here)
//   }

// // Q3)
// function addToCart(name, price, quantity) {
//     if (!name) {
//       throw new Error("Product name is required.");
//     }
//     if (price <= 0) {
//       throw new Error("Invalid product price.");
//     }
//     if (!Number.isInteger(quantity) || quantity <= 0) {
//       throw new Error("Invalid quantity.");
//     }
//     // Add product to cart logic here
//   }
  
//   function checkout() {
//     // Check if the cart is empty
//     if (cartIsEmpty()) {
//       throw new Error("Cart is empty. Add items before checkout.");
//     }
//     // Checkout logic here
//   }
  
//   // Example usage:
//   try {
//     addToCart("Laptop", 1200, 2);
//     addToCart("", 30, 1); // Should throw an error: "Product name is required."
//     addToCart("Mouse", -15, 3); // Should throw an error: "Invalid product price."
//     addToCart("Keyboard", 50, "abc"); // Should throw an error: "Invalid quantity."
//     checkout(); // Should throw an error: "Cart is empty. Add items before checkout."
//   } catch (error) {
//     console.error(error.message);
//   }