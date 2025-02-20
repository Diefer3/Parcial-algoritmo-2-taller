const libros = [
    {
        titulo: "El Invencible Verano de Liliana",
        anio: 2024,
        ejemplares_vendidos: { min: 10000, max: 20000 }
    },
    {
        titulo: "Las Repúblicas",
        anio: 2024,
        ejemplares_vendidos: { min: 15000, max: 30000 }
    },
    {
        titulo: "El Visitante",
        anio: 2024,
        ejemplares_vendidos: { min: 25000, max: 50000 }
    },
    {
        titulo: "Fortuna y Poder",
        anio: 2024,
        ejemplares_vendidos: { min: 20000, max: 40000 }
    },
    {
        titulo: "Los Años Intensos",
        anio: 2024,
        ejemplares_vendidos: { min: 30000, max: 60000 }
    }
];

function insercionPorVentasPromedio(array) {
    let i, j, clave;

    for (i = 1; i < array.length; i++) {
        clave = array[i];
        j = i - 1;

        // Función interna para calcular el promedio de ventas
        function calcularPromedio(libro) {
            return (libro.ejemplares_vendidos.min + libro.ejemplares_vendidos.max) / 2;
        }

        // Comparación basada en el promedio de ventas
        while (j >= 0 && calcularPromedio(array[j]) > calcularPromedio(clave)) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = clave;
    }
    return array;
}

console.time("insercionPorVentasPromedio");
const librosOrdenadosPorVentas = insercionPorVentasPromedio(libros);
console.timeEnd("insercionPorVentasPromedio");

console.log("Array ordenado por ventas promedio (de menor a mayor):", librosOrdenadosPorVentas);