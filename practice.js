

const data = {
    products : [
        {
            name : "laptop",
            price : 1000,
            isAvaible : true
        },
        {
            name : "Mobile",
            price : 500,
            isAvaible : false
        },
        {
            name : "TV",
            price : 2000,
            isAvaible : false
        },
        {
            name : "Fridge",
            price : 3000,
            isAvaible : true
        }

    ]
}
const products = data.products;

for(let i=0; i< products.length;i++) {
    console.log(products[i]);
}
var j=0
for(let i=0; i< products.length;i++) {
      j= j + products[i].price;
}
console.log(j);

// sum cost of avaible products
var j=0
for(let i=0; i< products.length;i++) {
    if(products[i].isAvaible == true) {
        j= j + products[i].price;
    }
}
console.log(j)
j = j - (j/100)*20;
console.log(j);

//Every     if every element in the aray is less than 40 then it will return true
const isBelowThreshold = (currentValue) => currentValue < 40;
const sometwenty = (twenty) => 20;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
console.log(array1.some(sometwenty));

//  Array Destructuring
const names = ["Fahad khan","Nadeem khan","Walayat khan","Faraz Soghati"];
const [name1,,,student4] = names;
console.log(name1);
console.log(student4);

// Object Destructuring

const student = {
    name : "Saad khan",
    age : 21,
    gpa : 3.4,
    friends : ["Ahmed", "Sudais","Samad Ahmad"],
    address : {
        city : "Kohat",
        tehsil : "thall"
    }
}

// In object Destructuring the new variable name will be the key like name
const {name,address} = student;
console.log(name);
// console.log(address);
console.log(address.city);
const {city,tehsil} = address;
console.log(tehsil);

const student1 = {
    name : "Saad khan",
    age : 21,
    gpa : 3.4,
    marks : 42,
    friends : ["Ahmed", "Sudais","Samad Ahmad"],
    address : {
        city : "Kohat",
        tehsil : "thall"
    }
}

const changeMarks = ({marks}) => {
    marks = 50;
    console.log(marks);
}
changeMarks(student1);

// const changeMarks = ({marks}) => {
//     marks = 50;
//  console.log(marks);
// }

// changeMarks(student1);

 const data1 = {
        marks : 55,
        name : 'Fahad khan',
        gpa : 3.5,
        isPass : true,
        friends : [
            'Saad khan', 'Abdul Qadir','Abdul Kareem','samad khan'
        ],
        address : {
            city : 'Hangu',
            country : 'Tehsil',
            Tehsil : 'Thall'
        }
    }
    // if(data1.isPass == true) {
    //     for(let i = 0; i< data1.friends.length; i++) {

    //         console.log(data1.friends[i]);
    //     }
    // }
    // else {
    //     console.log('no friends');
    // }
    if(data1.isPass == true && data1.gpa >=3.5 && data1.address.city == "Hangu") {
        console.log("You got a Scholership");
    }
    