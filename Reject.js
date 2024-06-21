////how to add or store data in the promise object using reject()

//whatever data we pass as a argument to reject() that will be store in the promise object.
//data store in the promise object using reject() is called Error/failure data
var promiseObj = new Promise(function(resolve, reject) {
    reject("something wrong");
 
 });
     console.log(promiseObj);