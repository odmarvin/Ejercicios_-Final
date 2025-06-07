/*1. push()

📌 Agregá el número 100 al final del arreglo [10, 20, 30] y mostrá el resultado. */

const arreglo: number[] = [10, 20, 30]
arreglo.push(100)
console.log(arreglo)

/* 2. pop()

📌 Quitá el último elemento del arreglo ["uva", "mango", "piña"] y mostrala antes y después. */

const frutas: string[] = ["uva", "mango", "piña"]
frutas.pop()
console.log(frutas)

/* 3. shift() / unshift()

📌 Usando el arreglo ["lunes", "martes", "miércoles"]:

    Quitá el primer día

    Agregá "domingo" al inicio */

const dias: string[] = ["lunes", "martes", "miércoles"]
dias.shift()
console.log(dias)
dias.unshift("lunes")
console.log(dias)

/* 4. forEach()

📌 Recorre el arreglo [1, 2, 3, 4] y mostrá cada número elevado al cuadrado. */

const numeros: number[] = [1, 2, 3, 4]
numeros.forEach(numero => {console.log(numero * numero) })

/* 5. map()

📌 Convertí los precios [100, 200, 300] a precios con IVA (agregar 12%). */

const precios: number[] = [100, 200, 300]
const preciosConIva: number[] = precios.map(precio => precio + (precio * 12)/100 )
console.log(preciosConIva)

/* 6. filter()

📌 Del arreglo [5, 12, 8, 130, 44], filtrá solo los números mayores a 10. */

const numeross: number[] = [5, 12, 8, 130, 44]
const numerosMayores: number[] = numeross.filter(x => x > 10)
console.log(numerosMayores)

/* 7. reduce()

📌 Calculá el total de ventas del arreglo [1200, 800, 500, 300]. */

const ventas:number[] = [1200, 800, 500, 300]
const tottal: number = ventas.reduce((a, b) => a + b, 0)
console.log(tottal)

/* 8. find()

📌 Encontrá el primer número impar en el arreglo [2, 4, 6, 7, 10]. */

const numerosImpares: number[] = [2, 4, 6, 7, 10]
let impar: number | undefined = numerosImpares.find(n => n % 2 !== 0)
console.log(impar)

/* 9. some() / every()

📌 Verificá si:

    Algún número en [1, 2, 3, 4, 5] es mayor a 4

    Todos son mayores a 0 */

const numerosx: number[] = [1, 2, 3, 4, 5]
console.log(numerosx.some(n => n > 4))
console.log(numerosx.every(n => n > 0))

/* 10. sort()

📌 Ordená alfabéticamente el arreglo ["pera", "manzana", "banana"]. */

const verduras: string[] = ["pera", "manzana", "banana"]
console.log(verduras.sort())

/* 11. includes()

📌 Comprobá si "carlos" está en el arreglo ["ana", "luis", "carlos"]. */

const nombres: string[] = ["ana", "luis", "carlos"]
console.log(nombres.includes("carlos"))

/* 12. indexOf()

📌 Encontrá la posición de "martes" en el arreglo ["lunes", "martes", "miércoles"] */

const diass: string [] = ["lunes", "martes", "miércoles"]
console.log(diass.indexOf("martes"))

/*  */