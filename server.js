const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
});

const port = 3000;
// localhost is the default value for 2nd argument
server.listen(port, 'localhost', () => {
  console.log(`listening for requests on port ${port}`);
});
