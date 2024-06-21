//Object Destructuring JS 
var obj ={
    username: "soha varma",
    city: "Pune",
    id:115,
    gender:"female",
};
console.log("Destructuring Object :");

//unpack the value in the object-just add key of the property

var {city,gender} = obj    //Destructuring object used-order doent matter in destructuring object
//console.log(obj.username);-----Destructuring used no need to use object name just pass only key name

console.log(city,gender);
console.log("-------------------------------------------------------");

//Destructuring Array JS
console.log("Destructuring Array :");

var productDetails = ["Iphone 14 pro","vivo A27","Samsung s21","Oppo"];

//Destructuring Array used-order matter in destructuring Array
var [element1,element2,element3]= productDetails;

//console.log(productDetails[2]);  --------simple way we can call array
console.log(element1,element2,element3);
