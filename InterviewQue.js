//Object created
var userobj={
    id: 101,
    name:"soha",
};
console.log("----------------------------------------------------------");


//interview quetion-2nd last element for the array.
let arr = ["a", "b", "c", "d", "e","f"];
console.log(arr[arr.length-2]);   //o/p=e 
console.log("----------------------------------------------------------");


//Interview questions :-> o/p will be undefined
var X ={foo :1}
var Output =(function()
{
    delete X.foo;
    return X.foo;

})();
console.log(Output);
console.log("----------------------------------------------------------");

//interview que 
 console.log(foo());
 function foo(){
     return "hello world";

 }
 console.log(foo());

  const foo1 =() => {
    return "hello word";
 };
 console.log("----------------------------------------------------------");

 //parseInt("10", 16);

 //Interview que -> o/p-> undefined 
//   var Y=1;
//   if(function f(){}){
//       y + = Typeof  f;</span> 
//   }
//   console.log(y);

var x = function Bar(){
    return 7;
};
typeof Bar;
