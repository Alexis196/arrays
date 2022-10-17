let listaCompras = ['tomate', 'cebolla', 'arroz', 'yerba', 'café'];
listaCompras.push('Aceite de Girasol');
console.log(listaCompras);

listaCompras.pop('Aceite de Girasol');
console.log(listaCompras);

let peliculas = [
    {titulo: 'Avengers: Infinity War',
    director: 'Anthony Russo, Joe Russo',
    fechaEstreno: 2018,
    },
    {
        titulo: 'Avengers: Endgame',
        director: 'Anthony Russo, Joe Russo',
        fechaEstreno: 2019,
    },
    {
        titulo: 'Jurassic Park',
        director: 'Steven Spielberg',
        fechaEstreno: 1993,
    }
];

let peliculasNuevas = peliculas.filter(valor => valor.fechaEstreno > 2010);
console.log(peliculasNuevas);

let directores = peliculas.map(valor => valor.director);
console.log(directores);

let titulos = peliculas.map(valor => valor.titulo);
console.log(titulos);

let concatenacion = directores.concat(titulos);
console.log(concatenacion);

let propagacion = [...directores, ...titulos];
console.log(propagacion);

