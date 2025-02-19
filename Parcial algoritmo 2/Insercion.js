const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 },
];

function insercionPorAnio(array) {
    let i, j, clave;

    for (i = 1; i < array.length; i++) {
        clave = array[i];
        j = i - 1;

        
        while (j >= 0 && array[j].anio > clave.anio) {  
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = clave;
    }
    return array;
}

console.time("insercionPorAnio");
const librosOrdenadosPorAnio = insercionPorAnio(libros);
console.timeEnd("insercionPorAnio");

console.log("Array ordenado por año:", librosOrdenadosPorAnio);




// • Orden por año de publicación (del más antiguo al más reciente). 