export interface User{
    id:number
    nombre: string
    apellido: string
    correoElectronico: string
    diaDeNacimiento:string
    contraseña:string
    rol:string
}

export const user:User[] = [
    {
        id:2,
        nombre:  'camilo',
        apellido:  'rivera',
        correoElectronico:  'camilorivera@gmail.com',
        diaDeNacimiento: '12-12-2024',
        contraseña: 'camilo',
        rol: 'estudiante',
    },
    {
        id:2,
        nombre:  'moni',
        apellido:  'nose',
        correoElectronico:  'moninoseelapellido@gmail.com',
        diaDeNacimiento: '12-12-2024',
        contraseña: 'moni',
        rol: 'admin',
    }
]