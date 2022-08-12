const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err,data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

// This files iit starts the process of reading this it takes some time to do in the meantime javaScript carries on down 
// the file it executed this first then once this is done we fire this callback function
//  and then this is logged to the console
console.log('last line');

// writing files
fs.writeFile('./docs/blog.txt','I wanna commemorate Steve Jobs', () => {
  console.log("Steve...");
})

// if file doesn't exist, it will create
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written');
// });

// directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

// deleting files
// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted');
//   });
// }