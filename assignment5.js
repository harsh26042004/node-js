// // Q1>
// function sumAsync (a,b,callback){
//     setTimeout(()=>{
//         const result=a+b;
//         callback(result);
//     },1000)
//     }
// sumAsync(3,7,(result)=>{
//     console.log(result);
// })

// Q2)
// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{resolve("Data fetched successfully")},2000)
//     })
// }
// getData().then((result)=>{
//     console.log(result);
// })

// Q3)
// async function fetchData(url){
//     const response=await fetch(url);
//     const data=await response.json();
//     return data;
// }
// fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{console.log(data)})


// Q4)
// async function fetchData(url){
//     const response=await fetch(url);
//     const data=await response.json();
// }
// fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{console.log(data)})

// // Q5)
// function multiplyWithCallback(numbers,callback){
//     const multipliedArray=numbers.map((num)=>num*2);
//     callback(multipliedArray);
// }
// const inputArray=[1,2,3,4];
// multiplyWithCallback(inputArray,(result)=>{
//     console.log(result);
// })



// Q6)
// function fetchUserDataAndPosts(userId){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((response)=>response.json())
//     .then((userData)=>{
//         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then((response)=>response.json())
//         .then((posts)=>({user:userData,posts}));
//     })

// Q7)
// function fetchMultipleData(urls){
//     const promises=urls.map((url)=>{fetch(url).then((response)=>response.jason())});
//     return Promise.all(promises);
// }
// const urlsToFetch=[
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3",
// ];
// fetchMultipleData(urlsToFetch).then((responses)=>{
//     console.log(responses);
// })

// }
// fetchUserDataAndPosts(1).then(result)=>{
//     console.log(result);
// }

// //  Q8
// function racePromises(promises){
//     return Promise.race(promises);
// }
// const promise1=new Promise((resolve)=>setTimeout(()=>resolve("Promise 1 resolved"),1000));
// const promise2=new Promise((_,reject)=>setTimeout(()=>reject("Promise 2 rejected"),500));

// racePromises([promise1,promise2]).then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{console.log(error)});