// Q1
// let a=5
// const square=(a)=>{
//     return a*a
// }
// console.log(square(a))

// // Q2
// const age=[19,22,19,24,20,25,26,25,24]
// console.log(age.sort())
// console.log("The maximum age is",Math.max(...age))
// console.log("The minimum age is",Math.min(...age))
// const n=age.length;
// let median;
// if(n%2===0){
// // If the array has an even number of elements, find the average of the two middle values.
//     median = (age[n/2-1]+age[n/2])/2;
// }else{
// // If the array has an odd number of elements, find the middle value.
//     median = age[Math.floor(n/2)];
// }
// console.log("The median is",median);

// // calculate the sum of ages
// const sum = age.reduce((acc,current)=>acc+current,0)
// // calculate the average
// const average =sum /age.length;
// console.log("The average age is",average)
// // calculate the range
// const range=Math.max(...age)-Math.min(...age,)
// console.log("The range is",range)
// const xyz=Math.abs(Math.min(...age)-average);
// console.log("The absolute difference between the minimum age and the average age is",xyz)
// const abc=Math.abs(Math.max(...age)-average);
// console.log("The absolute difference between the minimum age and the average age is",abc)

// Question 3
// Create a map to store contact information
// const contactMap = new Map();

// // Add some contact information to the map
// contactMap.set("John Doe", { age: 30, location: "New York" ,email:"officialharsh2604@gmail.com"});
// contactMap.set("Jane Doe", { age: 25, location: "Los Angeles",email:"jane@example.com"}); 
// contactMap.set("Bob Smith", { age: 40, location: "Chicago",email:"bob@example.com"});

// // Function to retrieve contact details by name
// function getContactDetails(name) {
//   if (contactMap.has(name)) {
//     return contactMap.get(name);
//   } else {
//     return null;
//   }
// }

// // Test the function
// console.log(getContactDetails("John Doe")); // Output: { age: 30, location: "New York" }
// console.log(getContactDetails("Jane Doe")); // Output: { age: 25, location: "Los Angeles" }
// console.log(getContactDetails("Bob Smith")); // Output: { age: 40, location: "Chicago" }
// console.log(getContactDetails("Unknown")); // Output: null

// // Q4
// class person{
//     function(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     introduce(){
//         console.log(`Hello I'm ${this.name}, and I'm ${this.age} year old`);
//     }
// }
// let person1=new person("John",30);
// let person2=new person("Jane",25)
// person.introduce();

// // Q5
// // Create a set store unique numbers
// const uniqueNO=new Set();
// // create a Map to stroe numbers and their sqares
// const numbersSq=new Map();
// // Add some numbers to the set
// uniqueNO.add(20);
// uniqueNO.add(5);
// uniqueNO.add(30);
// uniqueNO.add(10);

// // Iterate over the set  and stroe each number and its square in the map
// for (const number of uniqueNO){
//     numbersSq.set(number,number*number);
// }
// // Print the unique number and their sqares
// console .log("Unique numbers:")
// for (const number of uniqueNO){
//     console.log(number)
// }
// console.log("\n Squares of unique numbers:");
// for(const[number, square] of numbersSq){
//     console.log(`${number}:${square}`)
// }

// Q6
//  Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and logs a message.
function displayinfo(name,role){
    console.log(`Name:${name} and role:${role}`);
}
// 6. Use call to invoke the displayInfo function with specific arguments.
displayinfo.call(null,"John","Developer");
// 6. Use apply to invoke the displayInfo function with arguments passed as an array.
displayinfo.apply(null,["Jane Doe","Data Scientist"]);
// create another function name the greet for greeting the logs
function greet(){
    console.log(`Hello,${this.name}! and you are ${this.role}`)

}
// use bind method to create new function bound greet
const boundGreet=greet.bind({name:"bob smith",role:"Web Developer"});
boundGreet();