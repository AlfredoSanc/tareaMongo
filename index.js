var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:1234@cluster0-vccdo.mongodb.net/libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function nuevoLibro() {

  var libro= Libro({
    isbn: "8447354083",
    titulo: "El Secreto De Chimneys",
    autor: "Agatha Christie"
  });

  libro.save(function(err,data){
      if (err) {
        console.log("------------------------ERROR --------------------------");
      }else {
        console.log("------------------------OK ---------------------------");
        console.log(data);
      }
    });
  }

function nuevosLibro(){
  var libros=[
    { isbn: "8447354083", titulo: "El Secreto De Chimneys", autor: "Agatha Christie"},
    { isbn: "8422685442", titulo: "Café Solo", autor: "Charles Osborne"},
    { isbn: "8420646180", titulo: "Relatos", autor: "Juan Rulfo"},
    { isbn: "8408160443", titulo: "Hambriento", autor: "Ignacio Fornés Olmos"},
    { isbn: "6070733851", titulo: "El Festival De La Blasfemia", autor: "Ángel Daniel Revilla"},
    { isbn: "8490708681", titulo: "El Regalo", autor: "Eloy Moreno"},
    { isbn: "8401360498", titulo: "Alas De Fuego", autor: "Evan Rhodes"},
    { isbn: "8426315348", titulo: "Desde El Corazón De La Manzana", autor: "Juan Farias"},
    { isbn: "8420615072", titulo: "El Anticristo", autor: "Friedrich Nietzsche"},
    { isbn: "185799583X", titulo: "Zarathustra", autor: "Friedrich Nietzsche"},
  ];

  Libro.collection.insert(libros,function(err,data){
     if (err) {
       console.log("------------------------ERROR --------------------------");
     }else {
       console.log("------------------------OK ---------------------------");
       console.log(data);
     }
   });
 }

 function findByIsbn(isbn) {
   Libro.find({isbn:isbn},function(err,documentos){
     console.log(documentos);
   });
 }

 function modificarTituloByIsbn(isbn, nTitulo){
  Libro.findOneAndUpdate({isbn:isbn},
    {titulo:nTitulo}, function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  findByIsbn("8422685442");
  modificarTituloByIsbn("8420615072","Anticristo");
  //nuevosLibro();
  //nuevoLibro();
}
main();
