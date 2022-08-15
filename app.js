const express = require('express');
const morgan = require('morgan');

// Middleware : Code which runs (on the server) between getting a request and sending a respond   
// Middleware examples
// Logger middleware to log details of every request
// Authentication check middleware for protected routes
// Middleware to parse JSON data from requests
// Return 404 pages

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
// If we added some kind of static files to our project for example images or CSS file,
//  can we wouldn't be able to automatically access that file from the browser.
// That's why I couldn't  access my images in my previous lesson :)
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

// 3rd-party Middleware

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
