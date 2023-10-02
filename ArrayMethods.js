 //indexOf 
// 
const marks2 = [45, 33, 30, 77, 31, 85, 40, 55, 35, 22];
// console.log(marks2.indexOf(30));
// console.log(marks2.indexOf(77))


//  (marks2.indexOf(45) === -1 ? marks2.push(45) : marks2.pop());
//  console.log(marks2);

// // Concat
// const arr1 = [22, 45, 34, 23, 8, 98];
// const arr2 = [11, 80, 25, 69, 77];
// const full = arr1.concat(arr2);
// console.log(full);

// // Fill
// const result1 = [0, 20, 2, 20, 5,6,7,8];
// result1.fill(10,0,3);
// console.log(result1);

// // array join method
// const words = ['hello', 'my', 'is', 'khan'];
// const join = words.join(" ");
// const join1 = words.join("-");
// console.log(join);
// console.log(join1);

// //Every     if every element in the aray is less than 40 then it will return true
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const sometwenty = (twenty) => 20;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// console.log(array1.some(sometwenty));

// //  Array Destructuring
// const names = ["Fahad khan","Nadeem khan","Walayat khan","Faraz Soghati"];
// const [name1,,,student4] = names;
// console.log(name1);
// console.log(student4);

// // Object Destructuring

// // const student = {
// //     name : "Saad khan",
// //     age : 21,
// //     gpa : 3.4,
// //     friends : ["Ahmed", "Sudais","Samad Ahmad"],
// //     address : {
// //         city : "Kohat",
// //         tehsil : "thall"
// //     }
// // }

// // In object Destructuring the new variable name will be the key like name
// // const {name,address} = student;
// // console.log(name);
// // console.log(address);
// // console.log(address.city);
// // const {city,tehsil} = address;
// // console.log(tehsil);

// const student1 = {
//     name : "Saad khan",
//     age : 21,
//     gpa : 3.4,
//     marks : 42,
//     friends : ["Ahmed", "Sudais","Samad Ahmad"],
//     address : {
//         city : "Kohat",
//         tehsil : "thall"
//     }
// }

// const changeMarks = ({marks,address}) => {
//        marks = 50;
//     console.log(marks);
// }

// changeMarks(student1);

// // array slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);


// // String Methods
// str1 = "Hello";
// str2 = " World";
// str3 = str1.concat(str2);
// console.log(str3);
// str4 = str1 + str2;
// console.log(str4);
// str5 = `${str1} ${str2}`;
// console.log(str5);

// // indexOf
// str = "This is a new line.";
// const l = str.indexOf("new");
// console.log(l);
// console.log(str.indexOf("of"));  // it will return -1 because there is no of word in string

// // Replace
// const r = str.replace("new", "old");
// console.log(r);

// // Slice
// const countryName = "My country name is Pakistan";
// console.log(countryName.slice(3));
// const pak = countryName.slice(19,27);
// console.log(pak);
// const key = "Pakistan";
// const slic = countryName.slice(countryName.indexOf(key), countryName.indexOf(key) + key.length);
// console.log(slic);

// // Split   take value after comma or semi colon
// // in below wo do two things arrray destructuring and split
// const string = "1, Salman, Peshawar, 3.8, 6th, ICP";
// const [id, name, address, gpa, semester, institute] = string.split(",");
// console.log(id);
// console.log(institute);

// // Trim
// const name2 = " Abeeha";
// const trim1 = name2.trim();
// // const trim2 = name2.trimStart();

// console.log(name2)
// console.log(trim1);

// let strSentence = "you are so good";
// let upperCase = strSentence.toUpperCase();
// console.log(upperCase);

// let str6 = "THIS IS UPPER CASE SENTENCE";
// let lowerCase = str6.toLowerCase();
// console.log(lowerCase);

// let girlsName = "     Maneeha";
// let maneeha = girlsName.trimStart().toUpperCase();
// console.log(maneeha);


// let laugh = "ha ha ha";
// let rep = laugh.replace("ha","hee");
// console.log(rep);
// const st = "Hi this is Fahad khan";
// console.log(st.indexOf("be"));   // it will return -1 
// const price = "5" + "4"; 
// console.log(price);
// console.log("PUP"[3]);  // undefined
// let park = "Yellowstone";
// const index = park.indexOf("Stone");
// console.log(index);

// console.log("GARBAGE!".slice(2).replace("B",""));
// console.log("GARBAGE!".slice(2).replace("B"," "));

// // we cannot redeclear let in js
// let age= 15;
// // let age = 13;
// age = 14;
// console.log(age);
// let egg = 15;
// egg+1;
// console.log(egg);



