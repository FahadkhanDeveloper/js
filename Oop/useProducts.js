// import Product from "./Product"    // this is for Es6 which will be used in react

// default import in ES6 
// import Product from "./Product"

// import {Product1 as p1} from './Product'  //named import

// import default and named in a same line
// import Product, {Product2 as p2} from "./Product";
const Product = require("./Product");  // ES5 which is used in node
const p1 = new Product();
p1.name = "product1"
p1.price = 100;
p1.qty = 2;
const bill = p1.bill();

let p2 = new Product();
p2.name = "smart watch";
p2.price = 2000
p2.qty = 3
console.log(p2.discount())
console.log(p2.bill() - p2.discount())
// console.log(bill)