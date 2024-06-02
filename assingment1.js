// Q1
// let marks =90;
// if (marks>90){
//     console.log("Grade A");
// }
// if (marks>70 && marks<=90){
//     console.log("Grade B");
// }
// if(marks>50 && marks<=70){
//     console.log("Grade C");
// }
// if(marks<50){
//     console.log("Grade D");
// }

//Q2
// let num1=10;
// let num2=25;
// console.log(Math.random()*num1+Math.random()*num2)

// Q3

// const number=(num) =>{return num>=0?'Positive':'Negative'};
// const num=-5
// console.log(`The number ${num} is ${number(num)}`)

// Q4
// The Comma Operator (',') is a binary operator in JavaScript the evaluates its first operand and discards
// the result, then evaluates the second operand and returns its value.
// the general syntax of the comma operator is:1.expr1,expr2. Where `expr1` and `expr2` are expression.
// The Comma Operator is used to separate multiple expressions in a single statement.
// lets take an example:
// let x=10,y=20;
// console.log(x);
// console.log(y);

// Q5
// function login(username, password) {
//     if(username==='admin'&& password===12345){
//         return 'Login Successful'
//     }else{
//         return 'Invalid credentials'
//     }
// }console.log(login('admin',12345))
// console.log(login('admin',123))

// Q6)
const paymentMethod=(credit,debit,paypal)=>{
    if(credit){
        console.log(`the processing fee${credit}is 2%`)}
    if (debit){
        console.log(`the processing fee ${debit}is 1.5%`)}
    if (paypal)
        {console.log(`the processing fee ${paypal}is 3%`)}
    else{
        console.log('invalid choice!')
    }
}
paymentMethod('credit')
