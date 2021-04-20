import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { TarjetaCredito } from 'src/app/pages/models/TarjetaCredito';
import { TarjetaService } from 'src/app/shared/services/tarjeta.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    myForm: FormGroup;
    loading = false;
    private cardSubs: Subscription;
    card: any;
    titulo:string;
    id : string | undefined;
  
    constructor(private fb: FormBuilder,
      private _servicio: TarjetaService,
      private toastr: ToastrService) {
  
      this.myForm = this.fb.group({});
      this.initForm();
      this.titulo = 'Add Card';
      this.cardSubs=new Subscription();    
        
    }
  
    ngOnInit(): void {
  
      this.cardSubs = this._servicio.getTarjeta()
        .subscribe((res: TarjetaCredito) => {
          this.card = res;
          this.id = res.id;
          this.titulo='EDIT';
          this.myForm.patchValue({
            name: res.name,
            lastName: res.lastName,
            numTarjeta: res.numTarjeta,
            fechaExpiracion: res.fechaExpiracion,
            cvv: res.cvv,
            fechaCreacion: res.fechaCreacion,
            fechaActualizacion: new Date(),
            state: true,
          });
  
        })
    }
  
    ngOnDestroy() {
      this.cardSubs.unsubscribe();
    }
  
    private initForm(): void {
      this.myForm = this.fb.group({
        name: ['', [Validators.required,
        Validators.maxLength(15)]], //,this.notValidtData.bind(this)
        lastName: ['', [Validators.required,
        Validators.maxLength(15)]],
        numTarjeta: ['', [Validators.required,
        Validators.maxLength(10)
          , Validators.minLength(10)]],
        fechaExpiracion: ['', [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5)]],
        cvv: ['', [Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
        Validators.pattern(/^[1-9]+[0-9]*$/)]],
      })
    }
  
    private initValuesForm(): void {
      this.myForm.patchValue({
        name: 'Lucas',
        lastName: 'Prodan'
      });
  
      /*  this.myForm.disable(); */
    }
  
    createEdit() {
      if (this.id === undefined) {
        this.newCard();
      } else {
        this.editCard(this.id, this.card);
      }
    }
  
    newCard() {    
      alert('new');
      this.titulo='NEW';
      const TARJETA: TarjetaCredito = {
        name: this.myForm.value.name,
        lastName: this.myForm.value.lastName,
        numTarjeta: this.myForm.value.numTarjeta,
        fechaExpiracion: this.myForm.value.fechaExpiracion,
        cvv: this.myForm.value.cvv,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        state: true,
      }
      /* confirm(this.myForm.controls.lastName.value + 'FORM ' + this.myForm.valid);
      confirm(this.myForm.get("lastName")?.value + 'FORM ' + this.myForm.valid); */
      console.log(this.myForm);
  
      this.loading = true;
  
      setTimeout(() => {
        this._servicio.guardarTarjetaFirestore(TARJETA)
          .then(() => {
            /* ToastrService Siempre pasa 2 parametros, el msj y el titulo */
            /* Hay opciones individuales y opciones globalesen la raiz app-module . */
  
            this.toastr.success('Card was successfully registered ', ' Registered card ') /* Siempre pasa 2 parametros, el msj y el titulo */
            this.myForm.reset();
            this.loading = false;
  
          }, error => {
            this.loading = false;
            this.toastr.error('Something is going wrong ', error) /* Siempre pasa 2 parametros, el msj y el titulo */
            console.log('ERROR ', error);
          });
      }, 2000);
    }
  
    editCard(id: string, card: TarjetaCredito) {
  
      const TARJETA: TarjetaCredito = {
        name: card.name,
        lastName: card.lastName,
        numTarjeta: card.numTarjeta,
        fechaExpiracion: card.fechaExpiracion,
        cvv: card.cvv,
        fechaCreacion: card.fechaCreacion,
        fechaActualizacion: new Date(),
        state: true,
      }
  
      this.loading = true;
  
      this._servicio.edit(TARJETA, id)
        .then(() => {
          this.mostrarSpinner(); //Pone el  this.loading = true a false en 3000
         // this.loading = false;
          this.titulo = 'Add ', TARJETA.name;
          this.toastr.info('Card was successfully update ', ' Update card ') /* Siempre pasa 2 parametros, el msj y el titulo */
          this.myForm.reset();
          this.id=undefined;
        }, error => {
          this.loading = false;
          this.toastr.error('Something is going wrong ', error) /* Siempre pasa 2 parametros, el msj y el titulo */
          console.log('ERROR ', error);
        })
    }
  
    /*   notValidtData(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Test') {
          return {noPermite : true};
        }
        return null;
      } */
  
    setName() {
      this.myForm.get("name")?.setValue("sachin.tendulkar@gmail.com");
    }
  
    showSuccess() {
      /* Siempre pasa 2 parametros, el msj y el titulo */
      this.toastr.success('Hello world!', 'Toastr fun!');
    }
  
    mostrarSpinner(): void{ 
      this.loading = true;
      setTimeout(() => {
        this.loading=false;
      }, 2000);    
    }
  
  }
  