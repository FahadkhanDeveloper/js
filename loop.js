const object = {fname:"John", lname:"Doe", age:25};



for (let key in object) {
  console.log("key is ", key ," and value is ",object[key])
}

const number1 = [45, 4, 9, 16, 25];
for(let i of number1) {
    console.log(i)
}


// const numbers = [45, 4, 9, 16, 25];

// for (let x in numbers) {
//   console.log(x,numbers[x])
// }