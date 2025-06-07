/*## 🧩 **Ejercicio 9 – Interfaces y Tipos en TypeScript**

### 🎯 Instrucciones:

1. Declara una interfaz llamada `Usuario` con los siguientes campos:

    - `nombre: string`
    - `edad: number`
    - `activo: boolean`
    - `correo?: string`

2. Luego, crea otra interfaz `InformacionLogIn` con:

    - `correo: string`
    - `clave: string`
    - `recaptcha: boolean`

3. Declara una variable `usuarioActual` de tipo `Usuario` y asígnale un valor literal.

4. Implementa una función `loguear` que reciba como parámetro un objeto de tipo `InformacionLogIn` y:

    - Verifique que el correo incluya `@` y `.`
    - La clave tenga al menos 6 caracteres
    - El `recaptcha` sea `true`

5. La función debe imprimir `"Acceso permitido"` si todo es válido o `"Datos inválidos"` en caso contrario. */

interface Usuario {
    nombre: string
    edad: number
    activo: boolean
    correo?: string
}

interface InformacionLogIn {
    correo: string
    clave: string
    recaptcha: boolean
}

const usuarioActual: Usuario = {
    nombre: 'Admin',
    edad: 11,
    activo: true
}

function loguear(info: InformacionLogIn): void{
    if (info.correo.includes('@') && info.correo.includes('.') && info.clave.length > 5 && info.recaptcha === true){
        console.log('Acceso permitido')
    }else console.log('Datos invalidos')
}

const datosLogin: InformacionLogIn = {
     correo: 'correo@example.com',
     clave: '12345',
     recaptcha: true
}

loguear(datosLogin)