//function defination/declaration
function firstFun(){
    //fuction scope/block
    var num1 = 20;
    var num2 = 40;

    var result = num1+num2;
    console.log(result);

}
firstFun(); //function call

//how to give input data to the function
//parameters and argument
function add(x,y){   //--parameter passed
    
    var result= x+y;
    console.log(result);
}
add(50,20); //argument passed
add(25);
add(10,"soha");

