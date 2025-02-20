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

- `console.time("burbuja");` inicia un contador de tiempo con la etiqueta `"burbuja"`.
- `console.log(burbuja());` ejecuta la función e imprime la lista ordenada.
- `console.timeEnd("burbuja");` detiene el contador y muestra cuánto tiempo tomó la ejecución.

Ahora los títulos están en **orden alfabético de la A a la Z**.
