const fs = require('fs');
// fs.readFile("data.txt","utf8",(err,data) => {
//     if(err) return;
//     console.log(data)
// })
// fs.writeFile("data.txt","Hello this is line 2",(err,data) => {
//     if(err) throw err;
//     console.log("file is saved")
// })
// if we want to write obj in a file
const obj = {
    name : "Fahad khan",
    id : 2,
    city : "Peshawar"
}
// fs.writeFile("data.txt",JSON.stringify(obj),(err,data) => {
//     if(err) throw err;
//     console.log("file is saved");
// })

// read data from file which is in string form and convert it in obj form
fs.readFile("data.txt","utf8",(err,data) => {
    if(err) throw err;
    const o = JSON.parse(data);
    console.log(o);
})



//exception handling we use exception handing that our program will not break  mean if there is error in code it give us error and then terminate or it ignore that error and continue   
//  try and catch
// const a = 10;
// const b = 0;

// try {
//     const c = a/b;  // this will not run it will be try      if there is error in code then program will stop there and error will be passed to catch
//     console.log(c)

//     if(a==0 && b == 0) {
//         throw  // explicit throw        throw  means if a and b is 0  catch will run
//     }
// }
// catch(err) {
//    console.log(err)
// }
// finally {
//     console.log("denominator will be non zero") // if there is error or there is no error this finally block will execute     this is actually used for close database connection
// }