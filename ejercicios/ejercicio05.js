/*## 🧩 **Ejercicio 5 – Ciclos `while` y `do...while`**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario cuántos segundos quiere temporizar.

2. Use un ciclo `while` para mostrar un conteo regresivo desde ese número hasta 0.

    - Muestra un mensaje cada segundo como:
      `"Faltan 3 segundos"`, … `"Faltan 1 segundos"`, `"El tiempo finalizó"`

3. Luego, muestra un **menú interactivo** usando `do...while` con las siguientes opciones:

    ```
    1. Saludar
    2. Mostrar hora actual
    3. Salir
    ```

4. El menú se debe mostrar **al menos una vez** y repetirse hasta que el usuario elija la opción `3`.*/

const readline = require('readline-sync')

const segundosTexto = readline.question('¿Cuántos segundos quieres temporizar? ')
let segundos = parseInt(segundosTexto)

while (segundos > 0) {
    console.log(`Faltan ${segundos} segundos`)
    segundos--
}
console.log('El tiempo finalizó')
let opcion = '0'

do {
    console.log(
        `Menú interactivo:
        1. Saludar
        2. Mostrar hora actual
        3. Salir`)
    opcion = readline.question('Elige una opción: ')
    switch (opcion) {
        case '1':
            console.log('¡Hola!')
            break
        case '2':
            const horaActual = new Date()
            console.log(`Hora actual: ${horaActual}`)
            break
        case '3':
            console.log('Saliendo del menu...')
            break
        default:
            console.log('Opción no válida')
    }
} while (opcion !== '3')