const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://oguzhan1:oguzhan1@cluster0.0e4wyas.mongodb.net/note-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // We don't really want our server to listening for requests until connection has been made.
  //  If a user requests the home page and that home page lists a load of data dependent on the database
  // then we can't show that until the connection to the database has been established.
  // We're only gonna listen for requests after this connection is complete (mongoose.connect).
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog 2',
    body: 'more about my new blog 2'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('62fa804cd8b208013c81a9c0')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create a new blog'
  });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({
      createdAt: -1
    })
    .then(result => {
      res.render('index', {
        blogs: result,
        title: 'All blogs'
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});