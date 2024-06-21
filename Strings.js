var content = "xyzersdf";
var content = 'hgferyij';
var content = `dfrryuikm`;
var data = "male";
//added template string->${}->purpose of template string- we can get dynamic data using template string

var content2 = `sdrtuukkkkosw/${data}`; 
 console.log(content2);

 //Lenght:-tolowercase,touppercase

 var names = "soha patel";
 console.log(names.toLowerCase());
 console.log(names.toUpperCase());
 //Length:-
 console.log(names.length);          //provide the length of string

 console.log(names.substring(0,3));  //last index will be exclusive in substring
 console.log(names.substr(0,2));     //how many character you want extract
 
 //Replace:-
 var city ="pune";
 console.log(city.replace("pune","Mumbai"));

 //concat:-
var contact1 = "Hello Tina";
var newContent = "from chennai";
console.log(contact1.concat(" ", newContent, " ", " and he is Dev"));   //" "->provide for space bet 2 content.

//trim:- Remove the space from inital sate and end stage
var cont = "   hello sima!!    "
console.log(cont.trim());
console.log(cont.trimStart());   //trimStart:- Remove the space from start
console.log(cont.trimEnd());     //trimEnd:- Remove the space from end



