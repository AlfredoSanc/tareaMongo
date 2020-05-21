
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  isbn: String,
  titulo: String,
  autor: String
});

module.exports = mongoose.model('Libro', LibroSchema);
