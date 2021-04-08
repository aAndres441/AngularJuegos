import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TarjetaCredito } from 'src/app/pages/models/TarjetaCredito';
import { TarjetaService } from 'src/app/shared/services/tarjeta.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnDestroy{

  listCards: TarjetaCredito[] = [];
  todayString: string;
  todayDate: Date;
  count:number;
  errorSubscription: Subscription;
  textoError='';
  

  constructor(private _servicio: TarjetaService,
              private datePipe: DatePipe,
              private router: Router,
              private toastr: ToastrService) 
  {

    this.todayString = new Date().toLocaleDateString();
    this.todayDate = new Date();
    console.log('FECHA ', this.todayString, 'en date ', this.todayDate);
    this.count = 0;

    this.errorSubscription = this._servicio.getError()
    .subscribe((ata)=>{
      this.textoError = ata;
    })
    
  }
  
  ngOnInit(): void {
    this.getTrjetas(); 
  }
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe;
  }

  edit(tr: TarjetaCredito):void {
    this._servicio.setTarjeta(tr);
   
  }

  delete(trId: any): void {
    this._servicio.delete(trId).then(() => {
      this._servicio.setError('');
      /* ToastrService Siempre pasa 2 parametros, el msj y el titulo */
      /* Hay opciones individuales y opciones globalesen la raiz app-module . */
      this.toastr.error('Card successfully removed','Record deleted',{       
      });
    }, error => {
      console.log(error);
      this._servicio.setError('An error occurred' + trId);
      this.toastr.warning('An error occurred',error);
    })
  }

  getCardById(id: string|undefined){
    const res = this._servicio.getCardById(id).subscribe((data)=>{
      console.log('DATA', data, 'ID', data.id);
      if(!data){
        console.log('No exist Data');        
      }else{
        console.log('DATA ID', data.ref.firestore.app.options.valueOf());        
      }
    })
  }

  setCardById(id: string|undefined, name="San Francisco"): void{
    this._servicio.setCardById(id, name).then(() => {
      this._servicio.setError('');
      /* ToastrService Siempre pasa 2 parametros, el msj y el titulo */
      /* Hay opciones individuales y opciones globalesen la raiz app-module . */
      this.toastr.info('Card successfully updated','Record updated',{       
      });
    }, error => {
      console.log(error);
      this._servicio.setError('An error occurred when set');
      this.toastr.warning('An error occurred',error);
    })
  }

  getTrjetas() {
    this._servicio.getTarjetas()
      .subscribe((res) => {
        this.listCards = [];
        res.forEach((element: any) => {
          this.listCards.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
          //console.log('Lista',this.listCards);                
        });
      })     
  }

  /* la ruta a navegar toma como referencia a una relativa como base */
  reload() {
    this.router.navigate(['home'], {
      /* relativeTo: this.route, */
      queryParams: { ID: '1973' },
       fragment: 'Mal'
     });
    }
}
