
function square(n) {
    return n*n;
}

const res = square(10);
console.log(res);

// Arrow function
// const sq = (n) => {
//     return n*n;
// }
// const result = sq(10);
// console.log(result);



// short way
// if there is one line in the body of function there is no need of write return 
const sq = (n) => n*n; // if one argument we can write without parenthesis const sq = n => n*n;
// you also write like this
//const sq = (n => n*n);
const result = sq(10);
console.log(result);

const fun = (name) => {
    console.log(`Hello ${name}`);
}
// fun();  // result will be undefines
fun("Testing...");

// default argument/Parameter function
const myfun = (name = "khan") => {
    console.log(`Hello ${name}`);
};
myfun();

// Object Destructing 
const person = {
    name : "khan",
    id : 1,
    rollNo : 12,
}

// rename destructing objects 
const {id:id1,name} = person;
console.log(id1+"through rename object destructure");

function print(per) {
    console.log(per.name);
    console.log(per.id);
}
print(person);

// through object destructure
function display({name,id}) {
    console.log(name);
    console.log(id);
}
display(person);

// through arrow function
// const dis = ({name,id}) => {
//     console.log(name);
//     console.log(id);
// }
// dis(person);

// short way
const dis = ({name,id}) => console.log(name,id);
dis(person);

// forEach
list = [23,56,34,57,67,69];
list.forEach(function(n) {
    console.log(n);
});

// forEach through arrow function
// list.forEach(list = (n) => {
//     console.log(n);
// })


// inside forEach function is call back function this callback function is called when array first element is
// reached and at again call when array 2nd element is reached and so on
// list.forEach(list = (n) => {
//     console.log(n);
// });

// there is no need of var in function of forEach
//first argument is element and second argument is index of element and third is array
list.forEach((n,i,a) => console.log(n,i,a));


