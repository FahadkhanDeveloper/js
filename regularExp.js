// Regular Expression
console.log("hello");

// const str = "Fahad";
// const t = str.search("Fahad");  // if we give string then it will search that complete string
// console.log(t);

const str1 = "Saad"
const rg = str1.search(/saad/);  // if we give regular exp then it will search for pattern eg first search  for 
// capital S and then search immediately small a and so on
console.log(rg);
// // flag is used to overide default behaviour
// // i flag is used for case insensitive 
// const a = "World world world";
// const b = a.search(/world/i);
// console.log(b+" insensitiveSearch");
// const oneR = a.replace(/world/i,"khan");
// console.log(oneR);

// // g flag is used for global
// const st = "Hello hello hello"
// const everyR = st.replace(/hello/ig ,"khan");
// console.log(everyR);

// const man = "Mansur";  // mansoor
// const s = man.search(/mans(u|oo)r/i);
// console.log(s); 

// const whiteSpace = "Mans oor";
// const ws = whiteSpace.search(/[a-z]\s[a-z]/i);
// console.log(ws);

// const cnic = "14102-0429827-1";
// const regex = cnic.search(/^[0-9]{5}\-[0-9]{7}\-[0-9]{1}$/);
// console.log(regex + " cnic");


// const data = {
//     products : [
//         {
//             name : "laptop",
//             price : 1000,
//             isAvaible : true
//         },
//         {
//             name : "Mobile",
//             price : 500,
//             isAvaible : false
//         },
//         {
//             name : "TV",
//             price : 2000,
//             isAvaible : false
//         },
//         {
//             name : "Fridge",
//             price : 3000,
//             isAvaible : true
//         }
//     ]
// }
// const products = data.products;
// // sum cost of avaible products
// var j=0
// for(let i=0; i< products.length;i++) {
//     if(products[i].isAvaible == true) {
//         j= j + products[i].price;
//     }
// }
// j = j - (j/100)*20;
// console.log(j);