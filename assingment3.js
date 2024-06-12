// // // Q1. Calculate the total amount of customers
// // const orderList=[
// //     { name: "Laptop", price: 120000 },
// //     { name: "Mobile", price: 70000 },
// //     { name: "Mobile Charger", price: 1500 },
// //     { name: "Laptop Charger", price: 10500 },
// // ];
// // let totalPrice=0;
// // orderList.forEach(item=>{
// //     totalPrice+=item.price;
// // }); 
// // console.log("The total price is Rs."+ totalPrice);

// // // Q2
// // function generateRandomNumber(){
// //     // Generate the random number between 0 to 100
// //     const randomNumber=Math.floor(Math.random()*101)
// //     // print the random number
// //     console.log(randomNumber);
// // }

// // setInterval(generateRandomNumber,2000)

// // // // Q3
// // // let expenses = [
// // //   { amount: 100, category: "Utilities" },
// // //   { amount: 200, category: "Groceries" },
// // //   { amount: 50, category: "Entertainment" },
// // // ];

// // // const taxedExpenses = expenses.map(expense => {
// // //   const tax = expense.amount * 0.1;
// // //   return { ...expense, tax };
// // // });

// // // console.log(taxedExpenses); 

// // // Q4
// // const expenses = [
// //     {
// //       category: "Food",
// //       amount: 50,
// //     },
// //     {
// //       category: "Groceries",
// //       amount: 100,
// //     },
// //     {
// //       category: "Entertainment",
// //       amount: 25,
// //     },
// //     {
// //       category: "Groceries",
// //       amount: 75,
// //     },
// //   ];
  
// //   const groceriesExpenses = expenses.filter(
// //     (expense) => expense.category === "Groceries"
// //   );
  
// //   console.log(groceriesExpenses);

// //   Q5
// // const expenses = [
// //     {
// //       item: "Rent",
// //       amount: 1000,
// //     },
// //     {
// //       item: "Groceries",
// //       amount: 200,
// //     },
// //     {
// //       item: "Utilities",
// //       amount: 150,
// //     },
// //   ];
  
// //   const totalExpenses = expenses.reduce((accumulator, expense) => {
// //     return accumulator + expense.amount;
// //   }, 0);
  
// //   console.log(totalExpenses); // Output: 1350

// // Q6
// let expenses = [
//     { amount: 100, category: "Utilities" },
//     { amount: 200, category: "Groceries" },
//     { amount: 50, category: "Entertainment" },
//   ];
  
//   function categorizeExpense(expense) {
//     if (expense.amount > 100) {
//       return "High Expense";
//     } else {
//       return "Low Expense";
//     }
//   }
  
//   let categorizedExpenses = expenses.map(categorizeExpense);
  
//   console.log("Categorized Expenses:", categorizedExpenses);

// // Q7
// const ordersList = [
//     { name: "Laptop", price: 120000 },
//     { name: "Mobile", price: 70000 },
//     { name: "Mobile Charger", price: 1500 },
//     { name: "Laptop Charger", price: 10500 },
//   ];
  
//   let totalPrice = 0;
  
//   ordersList.forEach((order) => {
//     totalPrice += order.price;
//   });
  
//   console.log("The total price is Rs." + totalPrice);

// // Q8
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];

// numbers.forEach(number => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

