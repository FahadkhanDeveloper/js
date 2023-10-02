// function one() {
//     console.log("one")
// }
// function two() {
//     console.log("two")
// }
// function three() {
//     console.log("three")
// }
// one();
// two();
// three();

// function one() {
//     console.log("one")
// }
// function two() {
//    setTimeout(()=>{
//     console.log("two")
//    },500); 
// }
// function three() {
//     console.log("three")
// }
// one();
// two();
// three();

// now it is execution asynchronously means it is execution unsequencial it is not good in some cases if there is 
// product load function and it will take 30 sec and after that there is product price so if product is not loaded how
// we will see the price of the product so therefore will change this behavior

// for changing asyncchronous behavior we use callback hell promises and await async

// Es5 callback hell
// call back will execute at the last of the function it is actually used for closing data base connection 
// function one(callback) {
//     console.log("one");
//     callback();
// }
// function two(callback) {
//     setTimeout(() => {
//         console.log("two")
//         callback();
//     } ,4000)
// }
// function three(callback) {
//     console.log("three")
//     callback()
// }

// one(() => {
//     two(() => {
//         three(() => {
//             console.log("done")
//         })
//     })
// })

// here we call one and in the call back one we call two and call back of two we call three and the call back 
// of three we console done so when one function execute then inthe callback one we call two then two will execute
// and call back of two we call three and three will execute so this one two and three will execute sequencialy

// ES6 Promise 
function one() {
   return new Promise((resolve,reject) => {
    console.log("one")
    resolve();
   })
}
function two() {
   return new Promise((resolve,reject) => {
     setTimeout(() => {
        console.log("two")
        resolve();
     },4000)
   })
}
function three() {
    return new Promise((resolve,reject) => {
        console.log("three")
        resolve();
    })
}

// calling through .then

// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("done")
//         })
//     })
// })

// one call will call first and if resolve return form one function then .then function will be call and if resolve
// return form two function then three will call and so on

// calling through await async

// async function run() {
//   await one();
//   await two();
//   await three();
// }
// run();
// it will call function one and wait until resolve return from function one then call two and wait until resolve 
// return from two and so on but if reject return it will stop there

// through arrow function

// const run = async () => {
//     await one();
//     await two();
//     await three();
// }
// run();

// through anonymous function

(async() => {
    await one();
    await two();
    await three();
}) ();
