/*## 🧩 **Ejercicio 3 - Condicionales (`if`, `else if`, `else`)**

### 🎯 Instrucciones:

Crea un programa que:

1. Solicite al usuario su **fecha de nacimiento** en el formato `YYYY-MM-DD`.

2. Calcule su edad basándose en el año actual.

3. Si la edad es menor a 12, muestra `"Eres un niño"`.
   Si está entre 12 y 17, muestra `"Eres un adolescente"`.
   Si está entre 18 y 64, muestra `"Eres un adulto"`.
   Si es 65 o más, muestra `"Eres un adulto mayor"`.

4. Luego, solicita su **nota de examen (0 a 100)**.

5. Muestra la calificación correspondiente:

    - `"A"` si es 90 o más
    - `"B"` si está entre 80 y 89
    - `"C"` si está entre 70 y 79
    - `"D"` si está entre 60 y 69
    - `"F"` si es menor a 60
*/

const readline = require('readline-sync')
const fechaNacimientoTexto = readline.question('Ingrese su fecha de nacimiento (YYYY-MM-DD): ')
const fecha = new Date(fechaNacimientoTexto)
const anio = fecha.getFullYear()
const anioActual = new Date().getFullYear()
const edad = anioActual - anio
if (edad < 12) {
  console.log("Eres un niño")
} else if (edad >= 12 && edad <= 17) {
  console.log("Eres un adolescente")
} else if (edad >= 18 && edad <= 64) {
  console.log("Eres un adulto")
} else {
  console.log("Eres un adulto mayor")
}
const notaTexto = readline.question("Ingresa tu nota de examen (0-100): ")
const nota = parseFloat(notaTexto)
if (nota >= 90) {
  console.log("Calificación: A")
} else if (nota >= 80) {
  console.log("Calificación: B")
} else if (nota >= 70) {
  console.log("Calificación: C")
} else if (nota >= 60) {
  console.log("Calificación: D")
} else {
  console.log("Calificación: F")
}