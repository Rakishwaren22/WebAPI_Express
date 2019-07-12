const mongoose = require('mongoose');

var server =
  'mongodb+srv://rakesh:rave@cluster0-lpo7n.mongodb.net/testing?retryWrites=true&w=majority';

mongoose
  .connect(`${server}`, { useNewUrlParser: true })
  .then(res => {
    console.log('Connection Mongoose connected. ');
  })
  .catch(err => {
    console.log('Connection error mongoose server!');
  });

module.exports = mongoose;
