const uuid = require("uuid");
console.log(uuid.v4());

const {faker} = require('@faker-js/faker');  //named import
console.log(faker.internet.email());

const shuffle = require('shuffle-array');
const arr = [1,2,3,4,5];
shuffle(arr);
console.log(arr)