//Clousers:-
function Outer(){
    var city = "Pune";
    console.log("Outer Function", city);

    function Inner(x,y){
        console.log(x+y);
        console.log("Inner function", city);
        console.log(x*y);
    }
    //Inner(10,20);
    return Inner;
}
//Outer();

var fn = Outer();
fn(10,3);