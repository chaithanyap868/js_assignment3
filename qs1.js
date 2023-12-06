// .Write a JavaScript function named “greetMessage”that takes a parameter “name”and returns a greeting message.
//  For example, if the input is "Akhil," the function should return "Hello, Akhil!"



var readlineSync = require("readline-sync");
const greet=(name)=>
{
    console.log("hello",name)
}
let name= readlineSync.question('enter the name  ');
greet(name)