const libros = [ 
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 }, 
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 }, 
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 }, 
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 },
];


function burbuja (){
    let i, n, j, aux;

    n = libros.length;

    for ( j = 0; j < n - 1; j++){
        for (i = 0; i < n-j-1; i++){
            if (libros[i].titulo > libros[ i + 1].titulo){
                aux = libros[i];
                libros[i]= libros[ i + 1];
                libros[i + 1]= aux;
            }

        }
    }
return libros;
}

console.time("burbuja"); 
console.log(burbuja());
console.timeEnd("burbuja");   

    



// • Orden alfabético por título del libro. 

