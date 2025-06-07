/*## 🧩 **Ejercicio 6 – Ciclo `for` y Arreglos**

### 🎯 Instrucciones:

Crea un programa que:

1. Declare un arreglo con los siguientes nombres de estudiantes:

    ```ts
    const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
    ```

2. Use un ciclo `for` para imprimir un mensaje personalizado por cada estudiante:

    ```
    Bienvenido, Carlos
    Bienvenida, Ana
    ...
    ```

    _(Puedes asumir que los nombres que terminan en "a" son femeninos y el resto masculinos para personalizar el saludo)_

3. Luego, declara un arreglo de notas correspondientes (por ejemplo: `[70, 85, 55, 90, 60]`).

4. Calcula el promedio usando un ciclo `for`.

5. Imprime el resultado como:
   `"El promedio del grupo es: 72"`

### 🧩 Código base:

```ts
// Paso 1: Declarar arreglos
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]
```*/
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José', 'Marvin']
const notas = [70, 85, 55, 90, 80]
for (let i = 0; i < estudiantes.length; i++) {
  const nombre = estudiantes[i]
  const genero = nombre[nombre.length - 1]
  const saludo = genero === 'a' ? 'Bienvenida' : 'Bienvenido'
  console.log(`${saludo}, ${nombre}`)
}
let suma = 0
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]
}
const promedio = suma / notas.length
console.log(`El promedio del grupo es: ${promedio}`)