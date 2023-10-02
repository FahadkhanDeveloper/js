const os = require("os");
console.log(os.freemem()," free ram in bytes");
console.log(os.freemem()/1024);   // round off that bytes in gb
console.log(os.totalmem(),"tatal ram");
console.log(os.platform(),"current system operating system")
console.log(os.arch());
console.log(os.EOL) // it shows new line character that your new line character is  LF (linux) or CRLF(Window)
console.log(os.cpus());

// path module
const path = require("path");

const r = path.resolve("data.json");  // in resolve we give file name and it return that file absolute path
console.log(r," **** it is absolute path")

const b = path.basename("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes");
// it will return the last folder of the path
console.log(b);

// extname
const ext = path.extname("data.json");
console.log(ext);  // it will return file extension like .json or .js or .txt

// join the path 
console.log(path.join('/C','/Web engineering','data.json')); // give path name and it will join it

// normalize the path
console.log(path.normalize("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes"))
// in string \ means escape therefore we write 2 backward slashes \\   so this method will normalize that path means it will write path in normal form like  C:\Users\HP\OneDrive\Desktop\Mansoor sir web prac\JavaScript\nodejs\notes

// get the dirname of the path
console.log(path.dirname("C:\\Users\\HP\\OneDrive\\Desktop\\Mansoor sir web prac\\JavaScript\\nodejs\\notes"));
// it will show directory name means all path except that folder in which we write our code

// url
const url = require("url");
const adr = ('http://localhost:8080/default.htm?year=2017&month=feburary');
const q = url.parse(adr,true);  // it validate that url is correct or not
console.log(q.host)  // return localhost 
console.log(q.pathname);  // return part or pathname 
console.log(q.search);  // it will return paramenter which we pass in url like year and month
const qdata = q.query;  // return parameter as object
console.log(qdata)
console.log(qdata.year)