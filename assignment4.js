// // Q1>
// function button(){
//     let count=1;
//     return function(){
//         console.log(count++)
//     }
// }
// const click=button();
// click();
// click();
// click();

// Q2
let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};

const { orderId, productName, quantity } = order;

console.log(orderId);        // prints: 123456
console.log(productName);    // prints: Laptop
console.log(quantity);       // prints: 2
