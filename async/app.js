// function one() {
//     console.log("one");
// }
// function two() {
//     console.log("two");
// }
// function three() {
//     console.log("three");
// }
// one();
// two();
// three();

// Default behavior of js

// function oneD() {
//     console.log("one");
// }
// function twoD() {
//     setTimeout(() => {
//         console.log("two");
//     },500)

// }
// function threeD() {
//     console.log("three");
// }
// oneD();
// twoD();
// threeD();

// Call back hell
// ES 5 method
// function one(callback) {
//     console.log("one");
//     callback();
// }
// function two(callback) {
//     setTimeout(() => {
//      console.log("two");
//      callback();
//     },500);
// }
// function three(callback) {
//     console.log("three")
//     callback();
// }

// one(() => {
//     two(() => {
//         three(() => {
//             console.log("Done");
//         })
//     })
// })

// ES 6 promises
// return new promise means return the instance of promise
// Promise is a class and resolve and reject is function of that class
// resolve means we wait for something and we receive that thing and 
// program will continue
// reject means response is not received program will stop there
// function one() {
//     return new Promise((resolve,reject) => {
//         console.log("one");
//         resolve();
//     })
// }
// function two() {
//     return new Promise((resolve,reject) => {
//           console.log("two");
//           resolve();
//     })
// }
// function three() {
//     return new Promise((resolve,reject) => {
//         console.log("three");
//         resolve();
//     })
// }
// calling
// "then" will run when resolve return from Promise
// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done")
//         })
//     })
// })


// ES 6 async await

function one() {
    return new Promise((resolve,reject) => {
        console.log("one");
        resolve();
    })
}
function two() {
    return new Promise((resolve,reject) => {
          console.log("two");
          resolve();
    })
}
function three() {
    return new Promise((resolve,reject) => {
        console.log("three");
        resolve();
    })
}

// async function run() {
//     await one(); // wait until resolve return
//     await two();
//     await three();    
// }
// run();

// same as above but write in arrow function
const run = async() => {
    await one(); // wait until resolve return
    await two();
    await three();    
}
run();

// same as above but short method
// (async () => {
//     await one();
//       await two();
//       await three();
// })();

