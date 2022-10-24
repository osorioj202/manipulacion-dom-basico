var articulos = [
    { nombre: "bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "libro", costo: 320 },
    { nombre: "celular", costo: 10000 },
    { nombre: "laptop", costo: 20000 },
    { nombre: "teclado", costo: 500 },
    { nombre: "audifonos", costo: 1700 },
];


var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


var articulosBaratos = articulos.some(function(articulo){
     return articulo.costo <= 700;
});

articulosBaratos











