/*## 🧩 **Ejercicio 7 – Funciones y Procedimientos**

### 🎯 Instrucciones:

Crea un programa que:

1. Defina una función llamada `calcularAreaTriangulo` que reciba dos parámetros (`base`, `altura`) y retorne el área del triángulo.
   Usa la fórmula:

    ```
    área = (base * altura) / 2
    ```

2. Luego, define un **procedimiento** llamado `mostrarSaludo` que reciba un nombre y muestre el mensaje:
   `"Hola, Darlin. Bienvenido al sistema de geometría"`.

3. Desde el programa principal:

    - Solicita los valores de `base` y `altura` al usuario.
    - Solicita su nombre.
    - Llama a ambas funciones y muestra el resultado del área como:

        ```
        El área del triángulo es: 45
        ```
*/

const readline = require('readline-sync')
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2
}

function mostrarSaludo(nombre) {
  console.log(`Hola, ${nombre}. Bienvenido al sistema de geometría`)
}

const nombre = readline.question('Ingresa tu nombre: ')
const base = readline.questionInt('Ingresa la base del triangulo: ')
const altura = readline.questionInt('Ingresa la altura del triangulo: ')
const area = calcularAreaTriangulo(base, altura)
mostrarSaludo(nombre)
console.log(`El área del triangulo es: ${area}`)