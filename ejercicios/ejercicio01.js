/* ## 🧩 **Ejercicio 1 - Tipos de Datos y Variables**

### 📚 Tema:

_Declaración de variables, tipos primitivos (`string`, `number`, `boolean`, `undefined`, `null`), uso de `typeof`, entrada del usuario._

### 🎯 Instrucciones:


Completa el siguiente programa para que:

1. Solicite al usuario que ingrese su **nombre**, **edad**, y si está **activo** (true/false).
2. Declare tres variables para almacenar estos valores.
3. Imprima en consola un mensaje como:

    ```
    Hola, me llamo Ana, tengo 25 años y estoy activa: true
    ```

4. Luego, imprime el tipo de cada una de las variables usando `typeof`.
5. Finalmente, declara dos variables adicionales: */


const readline = require('readline-sync')
let nombre =''
let edadTexto =''
let activoTexto =''

nombre = readline.question('Ingrese el nombre del usuario: ')
edadTexto = readline.question('Ingrese la edad del usuario: ')
activoTexto = readline.question('Ingese si su usuario esta activo (true / false): ')

const edad = parseInt(edadTexto)
const activo = activoTexto === 'true'

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activ@: ${activo}`)
console.log(`Tipo de viable nombre: ${typeof nombre}`)
console.log(`Tipo de viable edad: ${typeof edad}`)
console.log(`Tipo de viable activo: ${typeof activo}`)

let valorNulo = null
let valorNoAsignado

console.log(`Tipo de viable valorNulo: ${typeof valorNulo}`)
console.log(`Tipo de viable valorNoAsignado: ${typeof valorNoAsignado}`)