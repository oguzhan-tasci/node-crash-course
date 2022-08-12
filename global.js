const speak = () => {
  console.log('hello, ninjas');
}

speak();

// Global Object
  // In node , we get access to a global object with several different 
  // methods and properties attached to it that we can use out of the box

// console.log(global);

// 'global' so similiar with 'window' in javascript.

// global.setTimeout(() => {
//   console.log('in the timeout');
// }, 3000);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);

// Output : C:\Users\oguzh\web_programming\node-crash-course-netNinja\node-crash-course
console.log(__dirname);
// Output : C:\Users\oguzh\web_programming\node-crash-course-netNinja\node-crash-course\global.js
console.log(__filename);

// no access to DOM methods
// Because 'document' belongs the 'window' but there isn't window anymore , there is 'global'.
console.log(document.querySelector);
