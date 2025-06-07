/*## 🧩 **Ejercicio 8 – Métodos de Arreglos: `map`, `filter`, `sort`**

❗*Disclaimer: en el examen se evaluaran también podrían evaluarse los métodos: includos en la presentación de dicha clase*

### 🎯 Instrucciones:

Crea un programa que:

1. Declare un arreglo de productos con nombre y precio:

    ```ts
    const productos = [
        { nombre: 'Zapatos', precio: 100 },
        { nombre: 'Camisa', precio: 80 },
        { nombre: 'Pantalón', precio: 120 },
        { nombre: 'Corbata', precio: 50 },
    ]
    ```

2. Use `map` para crear un nuevo arreglo con los precios incluyendo **12% de IVA**.
   Muestra el nuevo arreglo con los precios actualizados.

3. Use `filter` para obtener únicamente los productos cuyo **precio con IVA sea mayor o igual a 100**.

4. Use `sort` para **ordenar los productos por precio con IVA de menor a mayor**.

5. Imprime cada uno de los arreglos:

    - Con IVA
    - Filtrados
    - Ordenados*/

const productos = [
  { nombre: 'Zapatos', precio: 100 },
  { nombre: 'Camisa', precio: 80 },
  { nombre: 'Pantalón', precio: 120 },
  { nombre: 'Corbata', precio: 50 }
]
console.log('Productos')
console.log(productos)

const productosConIVA = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioConIVA: parseFloat((producto.precio * 1.12).toFixed(2))
  }
})
console.log('Productos con IVA:')
console.log(productosConIVA)

const productosFiltrados = productosConIVA.filter(producto => producto.precioConIVA >= 100)
console.log('Productos con IVA mayores o iguales a 100:')
console.log(productosFiltrados)

const productosOrdenados = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA)
console.log('Productos ordenados por IVA:')
console.log(productosOrdenados)