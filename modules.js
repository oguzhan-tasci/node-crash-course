const people = require('./people');

console.log(people); // returned empty array because 'people.js' doesn't export

// const data = require('./people');

// We can use it like that :
// console.log(data.people, data.ages);

// Or we can 'destruct' them :
// const { people, ages } = require('./people');

// console.log(people, ages);

// const os = require('os');

// console.log(os.platform(), os.homedir());




