let str = "He said \"Hello\"";  // we cannot use double quotes inside a double quotes
console.log(str);
let str1 = 'He said \'Hello\'';
console.log(str1);
let str3 = "he said I ain\'t happy";
console.log(str3);
let str4 = "Hello \nGood Bye";
console.log(str4);
let str5 = "Hello \t\t world";   // /t means tab
console.log(str5);
console.log("\\hello");  // for printing \ you type 2 \\

// Tempelate Literals
let tempelateLiterals = `this is sum of 4 and 5 ${4+5}`;   // `` this sign is backtick
console.log(tempelateLiterals);

// Math Methods
console.log(Math.PI);
console.log(Math.round(4.55));
console.log(Math.round(4.45));
console.log(Math.round(4.5));
console.log(Math.floor(4.999));
console.log(Math.floor(4.333));
console.log(Math.ceil(4.333));
console.log(Math.ceil(4.99));
console.log(Math.pow(4,2));
console.log(Math.pow(8,3));

// Random Number
console.log(Math.random());  // random decimal number from 0 to 1 not including 1
console.log(Math.random() * 6); // random decimal number from 0 to 6 not including 6 
console.log(Math.floor(Math.random() * 6)); // random integer number from 0 to 6 but not including 6
console.log(Math.floor(Math.random() * 6) + 1); // random integer number from 1 to 6

// TYPEOF
// below of both are correct
console.log(typeof(99));
console.log(typeof 99);

console.log(typeof("Fahad"));
console.log(typeof "Fahad");

console.log(typeof(true));

console.log(typeof(undefined));
console.log(typeof(null));  // typeof null is object it is by mistake

// ParseInt and parseFloat
console.log(parseInt("345"));
console.log(parseInt("345.956"));

console.log(parseFloat("45"));
console.log(parseFloat("46.6575"));
console.log(parseInt("$222")); /// it will return NaN
console.log(parseInt("222$")); // output only 222

console.log("A" < "z");  // true
console.log("a" > "Z"); // true
console.log("a" > "b");  // false
console.log("b" > "a");  // true
console.log("x" > "s");  //true
console.log("#" < "$");  //true

console.log(7 == "7");   // true because equal value
console.log(0 == ""); // true
console.log(0 == false); //true
console.log(1 == true); // true
console.log(true == false);  // false
console.log(null == undefined); // true

console.log(7 === "7");  // false
console.log(0 === false);  

console.log(1 != "1");  // false
console.log(1 !== "1"); // true because type is not equal
console.log(1 !== "2");
console.log(2 !== 2); 

console.log(2+5,"hello",true);

// nested condition example
let pass = "khan";

if(pass.length >= 6) {
    if(pass.indexOf(" ") === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password is strong enough, but cannot contain spaces");
    }
} else {
    console.log("Password must be long");
}

let mystery = 5;
if(mystery) {
    console.log("TRUTHY");
} else {
    console.log("FALSY");
}
let mystry = 0;  //falsy "" empty strig 0 null undefined NaN false
if(mystry) {
    console.log("TRUTHY");
} else {
    console.log("FALSY");
}

let password = "khankhan";
if(password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password")
}else {
    console.log("Invalid Password");
}

// logical operator precedence  ! not operator have higher precedence than && and ||
let x = 7;
console.log(x == 7 || x === 3 && x > 10);  // true  because && operator have more precedence than ||

let y = 7;
console.log((y == 7 || y === 3) && y > 10);  // false because parenthesis will be solved first

// Switch statement 
// let emoji = 'happy face';
// switch(emoji) {
//     case 'happy face':
//         console.log("yellow");
//         break;
//     case 'sad face':
//         console.log("yellow");
//         break;
//     case 'eggplant':
//         console.log("purple");
//         break;
//     case 'heart':
//         console.log("red");
//         break;
//     case 'lips':
//         console.log("red");
//         break; 
//         default:
//             console.log("you choose wrong emoji")
// }

// In shorter way

let emoji = 'lips';
switch(emoji) {
    case 'happy face':
    case 'sad face':
        console.log("yellow");
        break;
    case 'eggplant':
        console.log("purple");
        break;
    case 'heart':
    case 'lips':
        console.log("red");
        break; 
        default:
            console.log("you choose wrong emoji")
}
// Ternary Operator
let status1 = 'offline '
let color = status1 === 'offline' ? 'red' : 'green';
console.log(color);


