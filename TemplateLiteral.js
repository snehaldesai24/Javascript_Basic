let firstname= "Soha";
let lastname ="patel";
 console.log('Hello Myself ' +firstname+ ' ' +lastname);
console.log("-------------------------------------------------------------")
//string interpolation here we are using `` logic in this we no need to add any space logic using ${}-> we can use.
//if you want add the $ symbole in o/p result so we can use this format like "\$${firstname}"
 let combo = `
Hello ${firstname} ${lastname + "!!!!"}
`;
console.log(combo);