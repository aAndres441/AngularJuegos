import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/pages/models/TarjetaCredito';
import { TarjetaService } from 'src/app/shared/services/tarjeta.service';
import{ DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCards:TarjetaCredito[]=[];
  todayString: string;
  todayDate: Date;
  
  constructor(private _servicio: TarjetaService,
    private datePipe: DatePipe) {

    this.todayString = new Date().toLocaleDateString();
    this.todayDate = new Date();
    console.log('FECHA ', this.todayString, 'en date ', this.todayDate);
  }

  ngOnInit(): void {
    this.getTrjetas();

   
  }

  edit(tr: TarjetaCredito){
    confirm('EDIT');
  }
  delete(tr: TarjetaCredito){
    confirm('DELETE');
  }
  
  getTrjetas(){
    this._servicio.getTarjetas()
    .subscribe((res)=>{
      this.listCards=[];
      res.forEach((element: any) => {
        
        
        let tarjeta:TarjetaCredito = new TarjetaCredito(         
          (element.payload.doc.data().name).toLocaleString(),
          element.payload.doc.data().name,
          element.payload.doc.data().name,
          element.payload.doc.data().name,
          element.payload.doc.data().fechaCreacion,
          element.payload.doc.data().name, //: new Date(),
          element.payload.doc.data().name,
          ) 
          tarjeta.id= element.payload.doc.id,

        this.listCards.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(this.listCards);
        
        /* 
        tarjeta<TarjetaCredito> {
        name:'Juan',
        lastName:'Sugo',
        numTarjeta:'12er12er12',
        fechaExpiracion:'12/12',cvv:534, 
        fechaCreacion:new Date() ,
        fechaActualizacion: new Date(),
        state: true
      } */
       
      });
      
    })
  }

}
/*  this.listCards=[
      {name:'Juan',
      lastName:'Sugo',
      numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
      {name:'Juan',lastName:'Sugo',numTarjeta:'12er12er12',
      fechaExpiracion:'12/12',cvv:534, 
      fechaCreacion:new Date() ,
      fechaActualizacion: new Date(),
      state: true
    },
    ]; */