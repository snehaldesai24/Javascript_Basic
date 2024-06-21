//Accessing the data in promise object
//depending upon data when then and catch will call.
var promiseObj = new Promise(function(resolve, reject) {
    
    resolve({
         name:"soha",
         id:101,
         address:"karad",
     });
 
 });
     console.log(promiseObj);
     

     //How to access data of promise object
     //if promise object contains success data in that case then() will called
      //if promise object contains error/failure data in that case catch() will called
      //then and catch will take one callback function
     promiseObj.then(function(successdata){
         console.log("then() executed");
         console.log(successdata);
     }).catch(function(errordata){
        console.log("catch() executed");
        console.log(errordata);
     })