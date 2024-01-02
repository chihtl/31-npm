var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May i have your name?');
// console.log('Hi' + userName + '!');

// var names = [];
// var name = readlineSync.question(' what is your name? ');
// names.push(name);

// console.log(names);

var pet = {};

var name =  readlineSync.question('your pet name: ');
var gender =  readlineSync.question('pet gender (Male/Female): ');
var weight =  readlineSync.question('weight?: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);

