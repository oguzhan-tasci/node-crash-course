// We've seen how 'Node' can read data or files from a computer now but sometimes 
// those files could be very very large and therefore it would take a long time to read them

// You're probably streaming something like Netflix or Youtube 
// where little bits of data are sent to the browser a bit at a time so 
// you can start watching straight away without having to wait for the whole video to load initially

// Streams : Start using data, before it has finished loading.


const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
