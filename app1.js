const Notes = require("./Notes")
const n = new Notes();
// read file
const data = n.readFile();
console.log(data);
// const rec = n.search(2);
// console.log(rec)