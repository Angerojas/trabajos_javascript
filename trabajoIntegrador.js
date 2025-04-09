//Aqui inicia el  trabajo integrador para el curso de introducción al javascript
//Sistema de Gestión de Biblioteca

//EJERCICIO 1 - Estructura de datos

const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
      genero: "Realismo mágico",
      disponible: true
    },
    {
      id: 2,
      titulo: "Harry Potter y el Prisionero de Azkaban",
      autor: "JK Rowling",
      año: 1999,
      genero: "Fantasía",
      disponible: false
    },
    {
      id: 3,
      titulo: "El principito",
      autor: "Antoine de Saint-Exupéry",
      año: 1943,
      genero: "Fábula",
      disponible: true
    },
    {
      id: 4,
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      año: 1813,
      genero: "Romance",
      disponible: true
    },
    {
      id: 5,
      titulo: "A sangre fria",
      autor: "Truman Capote",
      año: 1960,
      genero: "Policial",
      disponible: false
    },
    {
      id: 6,
      titulo: "Boquitas Pintadas",
      autor: "Manuel Puig",
      año: 1969,
      genero: "Novela",
      disponible: true
    },
    {
      id: 7,
      titulo: "Historias de Cronopios y famas",
      autor: "Julio Cortázar",
      año: 1962,
      genero: "Historias cortas",
      disponible: true
    },
    {
      id: 8,
      titulo: "El Hobbit",
      autor: "J.R.R. Tolkien",
      año: 1937,
      genero: "Fantasía",
      disponible: false
    },
    {
      id: 9,
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      año: 1953,
      genero: "Ciencia ficción",
      disponible: true
    },
    {
      id: 10,
      titulo: "Crónica de una muerte anunciada",
      autor: "Gabriel García Márquez",
      año: 1981,
      genero: "Ficción",
      disponible: true
    }
  ];
  
//Hasta aqui es la primera parte del ejercicio 1. Se creó un array con 10 libros incluídas las propiedades requeridas para cada uno

const usuarios = [
    {
      user_id: 2525,
      nombre: "Harry Potter",
      email: "harrypotter@ministryofmagic.com",
      librosPrestados: [],
    },
    {
        user_id: 5252,
        nombre: "William Shakespeare",
        email: "shakespeare1564@gmail.com",
        librosPrestados: [],
    },
    {
        user_id: 5225,
        nombre: "Jane Doe",
        email: "jane_doe@hotmail.com",
        librosPrestados: [],
    },
    {
        user_id: 5522,
        nombre: "Peter Parker",
        email: "pparker@newyorkuni.edu",
        librosPrestados: [],
    },
    {
        user_id: 2255,
        nombre: "Princess Peach",
        email: "peachtheprinc3ss@gmail.com",
        librosPrestados: [],
    },
  ];

//Hasta aquí la segunda parte, otro array también con datos de usuarios

// EJERCICIO 2 - Funciones de Gestión de Libros
// creo una función con la información del nuevo libro para agregar al array

function agregarLibro(libros, 11, "Las Luces del Norte", "Phillip Pullman", 1980, "Fantasia", true) {
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    año: año,
    genero: genero,
    disponible: disponible
  };
  array.push(nuevoLibro);
}

console.log(libros);



