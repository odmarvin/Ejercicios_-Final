// Crea una función que busque el primer usuario activo en una lista
interface Usuario {
  nombre: string;
  activo: boolean;
}

export function encontrarUsuarioActivo(usuarios: Usuario[]): Usuario[] | undefined {
  const usuario: Usuario[] = usuarios.filter(index => index.activo == true)
  return usuario
}

// Pruebas
console.log(encontrarUsuarioActivo([
  { nombre: 'Luis', activo: false },
  { nombre: 'Ana', activo: true },
  { nombre: 'Andrea', activo: true },
  { nombre: 'Julia', activo: false }
]))
// { nombre: 'Ana', activo: true }
console.log(encontrarUsuarioActivo([])) // undefined