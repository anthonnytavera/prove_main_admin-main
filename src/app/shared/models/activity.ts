export interface Activity {
    idActividadColectiva: number,
    nombreActividadColectiva: string,
    descripcion: string,
    imagen: string,
    entrenadorResponsable: number,
    sociosInscritos: number[],
    diaClase: string,
    horaClase: string
}