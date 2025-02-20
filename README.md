# Método Burbuja

Aquí definimos un **array de objetos**, donde cada objeto representa un libro con tres propiedades:

- **titulo**: Nombre del libro.
- **anio**: Año de publicación.
- **reservas**: Cantidad de veces que ha sido reservado.

## Declaración de la función

Se declara la función `burbuja()`, que ordenará el array `libros`.

```javascript
n = libros.length;
```

Este código almacena el número de libros en la variable `n`, lo cual se usará en los bucles.

## Funcionamiento del algoritmo

- El **bucle exterior** (`j`) controla el número de pasadas por la lista.
- El **bucle interior** (`i`) recorre la lista comparando elementos adyacentes y haciendo intercambios si es necesario.

### Código de comparación:

```javascript
if (libros[i].titulo > libros[i + 1].titulo) {
    aux = libros[i];
    libros[i] = libros[i + 1];
    libros[i + 1] = aux;
}
```

- Compara el `titulo` de `libros[i]` con `libros[i+1]`.
- Si `libros[i].titulo` es mayor (alfabéticamente), se intercambian de posición usando la variable temporal `aux`.

Después de varias pasadas, la lista queda ordenada.

## Retorno de la lista ordenada

La función **devuelve la lista ordenada alfabéticamente por título**.

## Medición del tiempo de ejecución

El siguiente código mide el tiempo de ejecución del algoritmo de ordenamiento burbuja:

```javascript
console.time("burbuja"); 
console.log(burbuja());
console.timeEnd("burbuja");
```


# Método de Inserción

Aquí definimos un **array de objetos**, donde cada objeto representa un libro con tres propiedades:

- **titulo**: Nombre del libro.
- **anio**: Año de publicación.
- **reservas**: Cantidad de veces que ha sido reservado.

## Declaración de la función

Se declara la función `insercionPorAnio()`, que ordenará el array `libros` por el año de publicación.

```javascript
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
```

Este código sigue los siguientes pasos:

1. Se inicia el bucle desde el segundo elemento (`i = 1`), ya que el primero se considera ordenado.
2. Se toma el elemento actual (`clave`) y se compara con los anteriores.
3. Si el año de publicación del elemento anterior es mayor, se desplaza hacia la derecha.
4. Se repite el proceso hasta encontrar la posición correcta del elemento.
5. La lista queda ordenada de menor a mayor según el año de publicación.

## Medición del tiempo de ejecución

El siguiente código mide el tiempo de ejecución del algoritmo de inserción:

```javascript
console.time("insercionPorAnio");
const librosOrdenadosPorAnio = insercionPorAnio(libros);
console.timeEnd("insercionPorAnio");

console.log("Array ordenado por año:", librosOrdenadosPorAnio);
```

- `console.time("insercionPorAnio");` inicia un contador de tiempo con la etiqueta `"insercionPorAnio"`.
- `const librosOrdenadosPorAnio = insercionPorAnio(libros);` ejecuta la función y almacena el resultado.
- `console.timeEnd("insercionPorAnio");` detiene el contador y muestra cuánto tiempo tomó la ejecución.

Ahora los libros están **ordenados por año de publicación**, del más antiguo al más reciente.

- `console.time("burbuja");` inicia un contador de tiempo con la etiqueta `"burbuja"`.
- `console.log(burbuja());` ejecuta la función e imprime la lista ordenada.
- `console.timeEnd("burbuja");` detiene el contador y muestra cuánto tiempo tomó la ejecución.

Ahora los títulos están en **orden alfabético de la A a la Z**.

# Método de Selección

Aquí definimos un **array de objetos**, donde cada objeto representa un libro con tres propiedades:

- **titulo**: Nombre del libro.
- **anio**: Año de publicación.
- **reservas**: Cantidad de veces que ha sido reservado.

## Declaración de la función

Se declara la función `ordenarPorReservasDescendente()`, que ordenará el array `libros` en orden **descendente** según la cantidad de reservas.

```javascript
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
```

### Explicación del código:

1. Se obtiene la longitud del array `n`.
2. Se recorre la lista con un **bucle exterior** (`i`), que selecciona el índice actual.
3. Dentro de este bucle, un **bucle interior** (`j`) busca el elemento con más reservas.
4. Si encuentra un libro con más reservas, se intercambia con el elemento en la posición actual.
5. El proceso se repite hasta que todos los elementos están ordenados de mayor a menor.

## Medición del tiempo de ejecución

El siguiente código mide el tiempo de ejecución del algoritmo de selección:

```javascript
console.time("OrdenamientoPorReservas");
console.log("\nOrden por reservas (descendente):", ordenarPorReservasDescendente(libros));
console.timeEnd("OrdenamientoPorReservas");
```

- `console.time("OrdenamientoPorReservas");` inicia un contador de tiempo con la etiqueta `"OrdenamientoPorReservas"`.
- `ordenarPorReservasDescendente(libros);` ejecuta la función y muestra el resultado en consola.
- `console.timeEnd("OrdenamientoPorReservas");` detiene el contador y muestra cuánto tiempo tomó la ejecución.

Ahora los libros están **ordenados de mayor a menor según la cantidad de reservas**.


# Método de Inserción por Ventas Promedio

Aquí definimos un **array de objetos**, donde cada objeto representa un libro con las siguientes propiedades:

- **titulo**: Nombre del libro.
- **anio**: Año de publicación.
- **ejemplares_vendidos**: Rango de ejemplares vendidos, con valores mínimo (`min`) y máximo (`max`).

## Declaración de la función

Se declara la función `insercionPorVentasPromedio()`, que ordenará el array `libros` según el **promedio de ejemplares vendidos**.

```javascript
function insercionPorVentasPromedio(array) {
    let i, j, clave;

    for (i = 1; i < array.length; i++) {
        clave = array[i];
        j = i - 1;

        function calcularPromedio(libro) {
            return (libro.ejemplares_vendidos.min + libro.ejemplares_vendidos.max) / 2;
        }

        while (j >= 0 && calcularPromedio(array[j]) > calcularPromedio(clave)) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = clave;
    }
    return array;
}
```

### Explicación del código:

1. Se inicia el **bucle exterior** (`i`) desde el segundo elemento (`i = 1`), ya que el primero se considera ordenado.
2. Se define la función `calcularPromedio(libro)`, que calcula el promedio de ventas de un libro con la fórmula:
   ```javascript
   (libro.ejemplares_vendidos.min + libro.ejemplares_vendidos.max) / 2
   ```
3. Se compara el **promedio de ventas** de cada libro con los anteriores en la lista.
4. Si el libro actual tiene un menor promedio de ventas, se mueve hacia adelante en la lista.
5. La lista queda ordenada de menor a mayor según el **promedio de ejemplares vendidos**.

## Medición del tiempo de ejecución

El siguiente código mide el tiempo de ejecución del algoritmo de inserción:

```javascript
console.time("insercionPorVentasPromedio");
const librosOrdenadosPorVentas = insercionPorVentasPromedio(libros);
console.timeEnd("insercionPorVentasPromedio");

console.log("Array ordenado por ventas promedio (de menor a mayor):", librosOrdenadosPorVentas);
```

- `console.time("insercionPorVentasPromedio");` inicia un contador de tiempo con la etiqueta `"insercionPorVentasPromedio"`.
- `insercionPorVentasPromedio(libros);` ejecuta la función y muestra el resultado en consola.
- `console.timeEnd("insercionPorVentasPromedio");` detiene el contador y muestra cuánto tiempo tomó la ejecución.

Ahora los libros están **ordenados de menor a mayor según el promedio de ejemplares vendidos**.
