//Map Method-returs new array
const arr1 =[2,4,6,8,3,9];
const newArr= arr1.map((element) =>{
    return element*2;
});
console.log("Map Method:");
console.log(newArr);
console.log("-----------------------------------------------------------------");

//Filter Method-check conditions
const arr2 =[2,4,6,8,3,9];
const newArr1= arr2.filter((element) =>{
    return element%2===0;              //even no will be display as a output
});
console.log("Filter Method:");
console.log(newArr1);
console.log("-----------------------------------------------------------------");

//Reduce Method-reduce array in a single value 
const arr3 =[2,4,6,8,3,9];
//Reduce Method-accept 2 arguments only
const newValue = arr3.reduce((prev,curr) =>{
    return prev+curr;                 //Logic=> 2+4=6->6+6=12->12+8=20->20+3=23->23+9=32 return 32
});
console.log("Reduce Method:");
console.log(newValue);
