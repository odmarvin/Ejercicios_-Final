/* ## 🧩 **Ejercicio 10 – Enums y Clases**

### 🎯 Instrucciones:

1. Crea un `enum` llamado `Prioridad` con tres niveles:

    - `ALTA`, `MEDIA`, `BAJA`

2. Crea otro `enum` llamado `EstadoTarea` con los valores:

    - `PENDIENTE`, `EN_PROGRESO`, `FINALIZADA`

3. Declara una interfaz `Tarea` con los siguientes campos:

    - `id: number`
    - `titulo: string`
    - `completada: boolean`
    - `prioridad: Prioridad`
    - `estado: EstadoTarea`

4. Implementa una clase `GestorTareas` con:

    - Un arreglo interno `tareas: Tarea[]`
    - Un método `agregarTarea(titulo: string, prioridad: Prioridad)` que:

        - Cree una nueva tarea con estado `PENDIENTE` y completada en `false`
        - Genere el `id` automáticamente (usando `Date.now()` está bien)
        - Agregue la tarea al arreglo

    - Un método `listarTareas()` que imprima cada tarea con este formato:

        ```
        [Alta] Estudiar para el parcial - Estado: Pendiente
        ```

5. Inicializa el gestor con al menos 3 tareas.

6. **Ahora modifica el `enum Prioridad` para que sus valores sean emojis**:

    - ALTA = 🔴
    - MEDIA = 🟡
    - BAJA = 🔵

7. **Sin cambiar ningún otro código**, vuelve a ejecutar `listarTareas()` y observa el resultado.

### 🧩 Código base:

```ts
// class GestorTareas {
//     private tareas: Tarea[] = []

//     agregarTarea(titulo: string, prioridad: Prioridad) {
//         ...
//     }

//     listarTareas() {
//         ...
//     }
// }

// Paso 5: Uso del gestor
// const gestor = new GestorTareas()
// gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
// gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
// gestor.agregarTarea('Comprar snacks', Prioridad.BAJA)

// gestor.listarTareas()
``` */

enum Prioridad {
    ALTA = '🔴',
    MEDIA = '🟡',
    BAJA =  '🔵'
}

enum EstadoTarea {
    PENDIENTE = 'Pendiente',
    EN_PROGRESO = 'En Progreso',
    FINALIZADA = 'Finalizada'
}

interface Tarea {
    id: number
    titulo: string
    completada: boolean
    prioridad: Prioridad
    estado: EstadoTarea
}

class GestorTareas {
    private tareas: Tarea[] = []

    agregarTarea(titulo: string, prioridad: Prioridad){
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
            estado: EstadoTarea.PENDIENTE
        }
        this.tareas.push(nuevaTarea)
    }

    listarTareas(){
        this.tareas.forEach(tarea => {
            console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`)
        })
    }
}

const gestor = new GestorTareas()
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
gestor.agregarTarea('Comprar snacks', Prioridad.BAJA)
gestor.listarTareas()
