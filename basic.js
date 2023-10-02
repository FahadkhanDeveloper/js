const marks = 30;
if(marks < 30) {
    console.log("You are Fail");
}
else {
    console.log("You are Pass")
}

// conditional or ternary operator
const number = 31;
(number >= 33 ? console.log("Pass") : console.log("fail"));

// Tempelate literals 
const firstName = 'Fahad';
const lastName = 'Khan';
console.log("Hello " + firstName + " " + lastName);
console.log(`Hello ${firstName} ${lastName}`);  //`` this is called back quote

const line = 10;
console.log(`This is line ${line*5}`);

// for(let i=0; i<10;console.log(i)) {
//     i++;
// }

// For loop

const list = [2,4,6,98,41,65,53];

// for(let i=0; i<list.length; i++) {
//     console.log(list[i]);
// }

// The only loop for file reading is while loop because we dont know how many chararters are there in file 
// and new character also added daily to file  in while loop we dont know the end.
// While Loop
// let j = 0;
// while(j < list.length) {
//     console.log(list[j]);
//     j++;
// }

// Do while loop is appliacable in game beacause first time game be open if we click on exit then the game will exit but the first time game will be open it is done by do while loop
// Do While
// let k=0;
// do {
//     console.log(list[k]);
//     k++;
// } while(k < list.length)

// const data = {
//     marks : 55,
//     name : 'Fahad khan',
//     gpa : 3.4,
//     isPass : true,
//     friends : [
//         'Saad khan', 'Abdul Qadir','Abdul Kareem','samad khan'
//     ],
//     address : {
//         city : 'Hangu',
//         country : 'Tehsil',
//         Tehsil : 'Thall'
//     }
// }
// if(data.isPass == true) {
//     console.log(data.friends)
// }
// else {
//     console.log('no friends');
// }

const students =[
    {
        marks : 55,
        name : 'Fahad khan',
        gpa : 3.4,
        isPass : true,
        friends : [
            'Saad khan', 'Abdul Qadir','Abdul Kareem','samad khan'
        ],
        address : {
            city : 'Hangu',
            country : 'palistan',
            Tehsil : 'Thall'
        }
    },
    {
        marks : 45,
        name : 'Naib khan',
        gpa : 2.4,
        isPass : true,
        friends : [
            'karan khan', 'Arshad Qadir','Abdul Samad','M salman'
        ],
        address : {
            city : 'Kohat',
            country : 'Pakistan',
            Tehsil : 'Kachari chock'
        }
    },
    {
        marks : 30,
        name : 'Faraz khan',
        gpa : 1.4,
        isPass : false,
        friends : [
            'Kebria zuman', 'Waseem haider','Abdul wali','Kamran khan'
        ],
        address : {
            city : 'Lahore',
            country : 'Pakistan',
            Tehsil : 'Pindi'
        }
    }
]
// console.log(students[1].friends[3])

// for(let i =0; i<students.length; i++) {
//     if(students[i].isPass == true) {
//         console.log(students[i].address.Tehsil);
//     }
// }

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

// for(let i=0; i< products.length;i++) {
//     console.log(products[i]);
// }
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
j = j - (j/100)*20;
console.log(j);


const myMap = new Map();
const key1 = 'mystr';
const key2 = {};
const key3 = function(){}
myMap.set(key1,'This is a String');
myMap.set(key2,'This a blank object');
myMap.set(key3,'This is an empty function');
console.log(myMap);

// Getting the value from the Map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

// Getting the size of the map
console.log(myMap.size);

const companies = [
    {name: "company1", category: "Finance",start: 1981, end: 2003},
    {name: "company2", category: "Retail", start: 1992, end: 2008},
    {name: "company3", category: "Auto", start:1999, end: 2007},
    {name: "company4", category: "Retail", start:1989, end: 2010},
    {name: "company5", category: "Technology", start:2009, end: 2014},
    {name: "company6", category: "Finance", start:1987, end: 2010},
    {name: "company7", category: "Auto", start:1986, end: 1996},
    {name: "company8", category: "Technology", start:2011, end: 2016},
    {name: "company9", category: "Retail", start:1981, end: 1989}
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// for each loop
companies.forEach(function(company){
    console.log(company);
});

// Filters

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// if we write curly braces then we must write return 
// const isDrink = ages.filter(function(age){
//     if(age >= 21) {
//         return true;
//     }
// });
// console.log(isDrink);

// same as above
// if we does not write curly braces then we will not write return
const Drink = ages.filter(age => age >=21)
console.log(Drink);

const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true
    }
})
console.log(retailCompanies);
//  through Shortway
// const retailCompanies =companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Get 80s company 
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <=1990))
console.log(eightiesCompanies);

// Get company that lasted 10 years or more
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears);

// Create Array of Companies name
const companiesName = companies.map(function(company) {
    return company.name;
});
console.log(companiesName);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]` ;
// });
// console.log(testMap);

// ShortWay

const testMap1 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap1);

// Squareroot of ages
const squareAges = ages.map(age => Math.sqrt(age));
console.log(squareAges);

// Multiply ages by Two
const ageTimesTwo = ages.map(age => age * 2);
console.log(ageTimesTwo);
 
// Squareroot of ages and then multiply by two
const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age*2);
console.log(ageMap);

// sort 
// Sorted companies by start year
// const sortedCompanies = companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// }); 
// console.log(sortedCompanies);

// Same as above
// Sorted companies by start year
// const sorted_Companies = companies.sort(function(c1,c2) {
//     return c1.start-c2.start;
// });
// console.log(sorted_Companies);

// short method
const sortedCompanie = companies.sort((a,b) => a.start > b.start ? 1 : -1);
console.log(sortedCompanie);

// sort ages
// const sortAges = ages.sort();
// console.log(sortAges);

// Asending order
// const sortAges = ages.sort((a,b) => (a-b));
// console.log(sortAges);

// Decending order
const sortAges = ages.sort((a,b) => b-a);
console.log(sortAges);

// Reduce  sum of total ages
// const sumAges = ages.reduce(function(total, age) {
//     return total + age;
// },0);     
// ,0 is default value of total
// console.log(sumAges);

// short way
const sumAges = ages.reduce((total, age) => total + age,0);
console.log(sumAges);
 
// Get Total years for all companies
// Initially previous have 0 value
// const totalYears = companies.reduce(function(previous,current) {
//     return previous + (current.end - current.start);
// },0);
// console.log(totalYears);

const totalYears = companies.reduce((total,company) => total +(company.end-company.start),0);
console.log(totalYears);

const marks1 = [45, 33, 20, 77, 80, 95, 40, 55, 30, 22];

const sum = marks1
    .sort((a,b) => a - b)
    .filter(n => n > 50)
    .map(n => n + 10)
    .reduce((p,c) => p + c, 0);
    console.log(sum);


