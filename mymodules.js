const uuid = require("uuid");  
console.log(uuid.v4());
const keyCode = require("keycode-js");
// we will use it in reat because is front end lib  in KeyCode k and c is capital because it is class

// it will work in ES6
// const chalk = require("chalk");
// console.log(chalk.red("this is error"));

// lodash for array manipulation it will also work for object mani
const _ = require("lodash");

let words = ['sky', 'wood', 'forest','falcon','lion','universe']
console.log(_.first(words));
console.log(_.last(words));
console.log(_.nth(words,3));
console.log(_.nth(words,-2));
