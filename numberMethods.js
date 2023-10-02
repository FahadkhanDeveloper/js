const test1 = 23.5;
let test2 = 6;
console.log(typeof(test1));
console.log(typeof(test2));
// convert number to string
// explicity converting
let str = test2.toString();
console.log(typeof(str));
// implicit convertion
const str1 = test2 + ""
console.log(typeof(str1))
// toFixed method it will fix digit after .
const test3 = 12.444444;
const num = test3.toFixed(2);
console.log(num);
const test4 = 23.456435;
const num1 = test4.toFixed(3);
console.log(num1);
// precision is same is fixed but sometime it will be wrong so dont use it
const numPre = test4.toPrecision(3);
console.log(numPre);

// Math methods
// ceil
const no = 23.45;
const ceil = Math.ceil(no);
console.log(ceil);

// floor
const no1 = 23.67;
const floor = Math.floor(no1);
console.log(floor);
// round
const no3 = 45.66;
const round = Math.round(no3);
console.log(round);

// Random Number
// console.log(Math.random());  // random decimal number from 0 to 1 not including 1
// console.log(Math.random() * 6); // random decimal number from 0 to 6 not including 6 
// console.log(Math.floor(Math.random() * 6)); // random integer number from 0 to 6 but not including 6
// console.log(Math.floor(Math.random() * 6) + 1); // random integer number from 1 to 6

// same as above random number between 1 and 6
const randomNumber = Math.floor(Math.random()*6 + 1);
console.log(randomNumber);

// Date Methods

const d = new Date();   
console.log(d.getDate());  // only date like 12 13 or 14
console.log(d.getFullYear());  // like 2022
console.log(d.getHours());    // like 1   or  6

let hoursAmPm = 0;
const hours = 6;
switch(hours) {
    case 12:
        hoursAmPm = 12;
        break;
    case 24:
        hoursAmPm = 12;
        break;
        default:
            hoursAmPm = hours % 12;
}
console.log(hoursAmPm);
 let x = 6;
 let y = 12;
 let z= x%y;
 console.log(z+" hours");

//  for in loop  used on objects
const obj = {
    name : "Fahad khan",
    id : 33,
    city : "Peshawar",
    country : "Pakistan"
};
const keys = Object.keys(obj);
console.log(keys); // it will print only keys .note  const keys = Object.keys(obj)  object name mean keys 
// name will be same e.g keys = Object.keys so name will keys in both sides
for(key in obj) {
    console.log(key); //it will print keys
    console.log(obj[key]);
}

// For in loop used on string and arrays
const st = "Pakistan";
for(let j of st) {
    console.log(j);
}

const list = [22,45,56,67,45];
for(j of list) {
    console.log(j);
}
const unique = new Set(list);
console.log(unique);
