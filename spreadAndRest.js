// Spread and rest is for array concatenation and object concatenation  ... another listname 
const list1 = [3, 4,5 ,8,9];
const list2 = [10,12,15,...list1,20,40];
console.log(list2);
const list3 = [10,20,22,23,12,24];
const list4 = [...list3,60,50,66,67,78];
console.log(list4);

const obj1 = {
    name : "Fahad khan",
    rollno : 10,
    semester : 6
}
const obj2 = {
    gpa : 3.4,
    ...obj1,
    address : "hangu"
}
console.log(obj2);

const sum = (a,b) => {
    console.log(a+b);
}

const list = [10,30];
// spread operaor is used to pass array as an argument to function
sum(...list); // spread operator is used here ly a
// here ...c in function argument is array therefore we apply array method on it 
const count = (a,b, ...c) => {
    console.log(a+b);
    const s = c.reduce((a,b) => a + b ,0);
    console.log(s);
}

count(10,40,10,10,20,30);  // here first two argument for a and b and all remaining argument will be passed to
// ...c spread which work as array

const str = "Pak";
console.log(...str);  // it become array 

const s = [...str];
console.log(s);

// const a = ['s','a', 'f'];
// console.log(a);

const fname = "Fahad";
const lname = "khan";
const age = 22;
const gender = "male";
const city = "Peshawar";
const village = "sarozai";
const houseNo = 30;

// how to create oject from normal variables we write key and value name same
// const data = {
//     fname : fname,
//     lname : lname,
//     age    : age,
//     gender : gender,
//     address : {
//         city : city,
//         village : village,
//         houseNo : houseNo
//     }                                                                                                                                                                                                                                                                       
// }

// key and value name is same write only one 
// object property values short-hand
const data = {
    fname,
    lname,
    age,
    gender,
    address : {
        city,
        village,
        houseNo
    }                                                                                                                                                                                                                                                                       
}
console.log(data);

