//hoisting JS:->

console.log(city);  //o/p => undefined

var city = "pune";
console.log(city);    //o/p =>pune



//Shadowing:->you can initialize 2 varaible at a time

var city ="pune";
var city ="mumbai";
console.log(city);   //o/p => mumbai
