// Create a function expression called “printNumbers” that takes a parameter “lastNumber” and prints numbers from 1 to ‘n’ using a loop.
var readlineSync = require("readline-sync");
const printnumbers=(n)=>
{
    for(i=1;i<n;i++){
        console.log(i)
    }
}
let num= parseInt(readlineSync.question('enter the last number  '));
printnumbers(num)