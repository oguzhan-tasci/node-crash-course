const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});
// timestamps : This automatically generates time stamp properties for us on our blog documents as well

// First argument the name of this model ; second argument is gonna be schema name.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;