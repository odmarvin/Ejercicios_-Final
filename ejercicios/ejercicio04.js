/*## 🧩 **Ejercicio 4 – Estructura `switch`**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario que ingrese un número del **1 al 7**.

2. Use una estructura `switch` para imprimir el día de la semana correspondiente:

    - `1` → "Lunes"
    - `2` → "Martes"
    - `3` → "Miércoles"
    - `4` → "Jueves"
    - `5` → "Viernes"
    - `6` → "Sábado"
    - `7` → "Domingo"
    - Cualquier otro número → "Día inválido"

3. Luego, solicita al usuario un **color del semáforo** (`verde`, `amarillo`, `rojo`).

4. Usa otro `switch` para mostrar el mensaje correspondiente:

    - `"verde"` → "Puede avanzar"
    - `"amarillo"` → "Pase con precaución"
    - `"rojo"` → "Deténgase"
    - Otro valor → "Color no válido"
*/

const readline = require('readline-sync')

const numeroDiaTexto = readline.question('Ingresa un numero del 1 al 7: ')
const numeroDia = parseInt(numeroDiaTexto)

switch (numeroDia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Día inválido, ingresa un numero del 1 al 7')
}
const color = readline.question('Ingresa un color del semaforo (verde, amarillo, rojo): ')

switch (color) {
    case 'verde':
        console.log('Puede avanzar')
        break
    case 'amarillo':
        console.log('Pase con precaución')
        break
    case 'rojo':
        console.log('Deténgase')
        break
    default:
        console.log('Color no válido')
}
