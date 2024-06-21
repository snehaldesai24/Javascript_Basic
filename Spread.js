//using spread 
var obj1={
    id :101,
    name:"Tina",
    address:"Thane",
};
var obj2={
    ...obj1,
    gender:"female",
    address:"pune",
};

console.log(obj1);
console.log(obj2);
console.log("----------------------------------------------------------------------");
//Rest parameter using

var arr1 = [10,20,49,33];
var arr2 =["soha", ...arr1,{id :111,
    name:"suman",
    address:"wakad"}];
console.log(arr1);
console.log(arr2);

