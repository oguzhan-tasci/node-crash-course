const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', {
    root: __dirname
  });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', {
    root: __dirname
  });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// it does the same as below
// app.get('*', (req,res) => {
//   res.sendFile('./views/404.html',{root:__dirname});
// });

// 404 page 
// 'use' function is going to fire for every single request coming in but only if the request reaches this point in the code
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', {
    root: __dirname
  });
});