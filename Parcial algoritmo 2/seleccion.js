const libros = [
    { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
    { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
    { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
    { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 },
];

function ordenarPorReservasDescendente(libros) {
    let n = libros.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i; 
        for (let j = i + 1; j < n; j++) {
            if (libros[j].reservas > libros[maxIndex].reservas) { 
                maxIndex = j;
            }
        }
    
        if (maxIndex !== i) {
            [libros[i], libros[maxIndex]] = [libros[maxIndex], libros[i]];
        }
    }
    return libros;
}


console.time("OrdenamientoPorReservas");
console.log("\nOrden por reservas (descendente):", ordenarPorReservasDescendente(libros));
console.timeEnd("OrdenamientoPorReservas");






