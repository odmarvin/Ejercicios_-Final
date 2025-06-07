/* ## 🧩 **Ejercicio 2 - Operadores y Expresiones**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario el **precio de un producto** y el **porcentaje de descuento**.

2. Calcule el total a pagar aplicando el descuento.

3. Imprima un mensaje como:
   `"El precio final con descuento es: Q160"`

4. Luego, solicita al usuario su **estatura en centímetros**.

5. Verifica si la estatura está en el rango permitido para subirse a un juego mecánico (mínimo 120 cm y máximo 200 cm).

6. Muestra un mensaje que indique si puede o no ingresar. */

const readline = require('readline-sync')
const precioTexto = readline.question('Ingrese el precio: ')
const descuentoTexto = readline.question('Ingrese el % del descuento: ')
const precio = parseInt(precioTexto)
const descuento = parseInt(descuentoTexto)
const total = precio - ((precio * descuento)/100)
console.log(`El precio final con descuento es: Q${total}`)
const estatura = readline.questionInt('Ingrese su estatura en cm: ')
if(estatura >= 120 && estatura <= 200) console.log('Estas en el rango permitido para subirte al juego')
else console.log('No cuentas con la estatura permitida para subirte al juego')
