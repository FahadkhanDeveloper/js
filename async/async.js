// function one() {
//     console.log("one")
// }
// function two() {
//     console.log("two")
// }
// function three() {
//     console.log("three")
// }

// one()
// two()
// three();
// it will be run synchronously  means sequentialyy
// but if  there is delay in code then it will not run sequentially it will run asynchronously
// function one() {
//     console.log("one")
// }
// function two() {
//     setTimeout(() => {
//     console.log("two")   
//     },5000)    // 500 means 5 sec
// }
// function three() {
//     console.log("three")
// }

// one()
// two()
// three();

// now it is executing asychronously 
// but if product loading take 20sec and after that there is price so without loading the product how we see price 
// so therefor we will change change this behaviour
// we will change it through callback hell , promise and await sync

// ES5
// throw call back hell
// function one(callback) {
//     console.log("one");
//     callback();
// }
// function two(callback) {
//     setTimeout(() => {
//     console.log("two");
//     callback();
//     } ,5000)
// }
// function three(callback) {
//     console.log("three")
//     callback();
// }

// one(() => {
//     two(() => {
//         three(() => {
//             console.log("done")
//         })
//     })
// })

// ES6 promise
// Promises
function one() {
    return new Promise((resolve,reject) => {
        console.log("one");
        resolve();
    })
}
function two() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("two");
            resolve();
        },5000)
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
//             console.log("Done")
//         })
//     })
// })
// then will be run when resolve return from upper if reject return then the program will break there

// calling through await async

// async function run() {
//     await one();
//     await two();
//     await three();
// }
// run();

// call one() and wait until resolve return call two and wait until resolve return
// calling through arrow function
// const run = async() => {
//     await one();
//     await two();
//     await three();
// }
// run();

// calling through anonymous function

(async () => {
    await one();
    await two();
    await three();
}) ();

