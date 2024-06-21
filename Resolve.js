//how to add or store data in the promise object using resolve()
var promiseObj = new Promise(function(resolve, reject) {
   // resolve("sayali"); // what ever data will pass in resolve fun that data will be store the data in the promise
   //data is passed in the form of object 
   //whatever data we store using resolve() in the promise object that data is called success data. 
   resolve({
        name:"soha",
        id:101,
        address:"karad",
    });

});
    console.log(promiseObj);