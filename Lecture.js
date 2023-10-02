var shuffle = require("shuffle-array");
const marks = [22,33,44,55,66,77,88];

const shuffled = shuffle(marks);
// console.log(shuffled)
// the work of fs module is file manipulation means file reading , writing and deleting
const fs = require("fs");
// fs.writeFileSync("data.txt","Hello this file and it have some text", (err,data) => {
//     if(err) throw err;
//     console.log("File is saved")
// })
// fs.readFile("data.txt","utf8", (err,data) => {
//     if(err) throw err;
//     console.log(data)
// })
const products = [
    {
        "id": "1",
        "title": "Mobile",
        "price": "30000"
    },
    {
        "id": "2",
        "title": "Laptop",
        "price": "40000"
    }
]

// fs.writeFile("product.json",JSON.stringify(products), (err,data) => {
//     if(err) throw err;
//     console.log("stringify file is saved")
// })
// fs.readFile("product.json","utf8",(err,data) => {
//     if(err) throw err;
//     const json=JSON.parse(data)
//     console.log(json)
// })

// os   Operation system
const os = require("os");  // import os using common JS (ES5)
// console.log(os.freemem()," free ram in bytes");
// console.log(os.freemem()/1024);   // round off that bytes in gb
// console.log(os.totalmem()," total ram")
// console.log(os.platform(),"current system operating system win32")
// console.log(os.platform())
// console.log(os.arch(),"    64 bit ")
// console.log(os.version())
// console.log(os.cpus())
// console.log(os.cpus().length)

// console.log(os.EOL) // it shows new line character that your new line character is  LF (linux) or CRLF(Window)

// const md5 = require("md5")

// console.log(md5("abc"))

const {v4:uuidv4} = require("uuid");
// const id = uuidv4();
// console.log(id)
// console.log(`QA + ${id} @gmail.com`)

// path
const path = require("path");
// resolve
const r = path.resolve("data.json");  // in resolve we give file name and it return that file absolute path
console.log(r," **** it is absolute path")
const res = path.resolve("data.json")
console.log(res)
// basename
const b = path.basename("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes");
// it will return the last folder of the path
console.log(b, "   Base name");
const bName = path.basename("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes")
console.log(bName)

// extname
const ext = path.extname("data.json");
console.log(ext);  // it will return file extension like .json or .js or .txt

const extName = path.extname("data.txt")
console.log(extName)

// join the path 
console.log(path.join('\C','\Web engineering','data.json')); // give path name and it will join it
console.log(path.join("\D","\Webengineering","data.json"))

// get the dirname of the path
console.log(path.dirname("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes"));
// it will show directory name means all path except that folder in which we write our code

const url = require("url");
const adr = ('http://localhost:8080/default.htm?year=2017&month=feburary');
const q = url.parse(adr,true)  // it validate that url is correct or not
console.log(q.host)  // it will return local host 8080
console.log(q.pathname);  // return path or pathname (default.htm)
console.log(q.pathname)
console.log(q.search);  // it will return paramenter which we pass in url like year and month
const obj = q.query;  // return parameter as object
console.log(obj)
console.log(obj.year)
console.log(obj.month)
