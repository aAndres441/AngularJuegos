export class TarjetaCredito {
    
    id?: string;
    name: string;
    lastName: string;
    numTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    state?: boolean;

    constructor(nombre: string, lastName: string, numTarjeta: string, fechaExpiracion: string,
        cvv: number, fechaCreacion: Date, fechaActualizacion: Date){

        this.name=nombre;
        this.lastName=lastName;
        this.numTarjeta =numTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
        this.fechaCreacion = new Date();        
        this.fechaActualizacion = new Date();
    }


}