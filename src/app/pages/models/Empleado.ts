export class Empleado{
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;
   /*  edad: Date ;
    state: boolean; 
    hobbies:string[]*/

    constructor(legajo: number, nombre: string, apellido: string, sexo: string, salario: number, hobbies: string[]){
        this.legajo=legajo;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.salario=salario;
        /* this.state=false;
        this.edad =  new Date(Date.now()); 
        this.hobbies = hobbies;*/

    }

    toString() {
        return ('Nombre ' + this.nombre + 'Fecha ' + this.salario)
    }

}