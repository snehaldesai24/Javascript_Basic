//Normal Function-if you have only one stmt that time we need to pass return stmt and block
function fn(){
    return "I am Returning a String";
}

//Arrow function-if you have only one stmt that time no need to pass any return stmt and block
var myArrow = ()=> "I am returning from Arrow function";
console.log(myArrow());

var obj1 = {
    username : "Ram",
    city:"Pune",
    print : function(){
        console.log(this.username, this.city);   //this is nothing but your current object->obj1.username
    },
};
obj1.print();

var obj2 = {
    username : "Ram",
    city:"Pune",
    print : ()=> {
        console.log(this.username, this.city);   
        //this is not pointing to current object-if you use arrow function then it will be pointing to the window object
    },
};
obj2.print();