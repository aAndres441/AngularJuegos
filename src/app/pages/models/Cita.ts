export class Cita{
    
    nombre: string;
    fecha: string;
    hora: string;
    sintoma: string;


    constructor(nombre: string, fecha: string, hora: string, sintoma: string) {
        this. nombre = nombre;
        this. fecha = fecha;
        this. hora = hora;
        this. sintoma = sintoma;
    }

    toString() {
        return ('Nombre ' + this.nombre + 'Fecha ' + this.fecha);
    }

}