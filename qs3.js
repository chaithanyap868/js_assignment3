// Create a function expression named printEvenNumbers that takes a parameter n and prints all even numbers from 1 to n using a loop.
var readlineSync = require("readline-sync");
const printevennumbers=(n)=>
{
    console.log("Even numbers from 1 to",n)
    for(i=1;i<n;i++){
        if(i%2===0){
        console.log(i)
    }}
}
let num= parseInt(readlineSync.question('enter the last number  '));
printevennumbers(num)