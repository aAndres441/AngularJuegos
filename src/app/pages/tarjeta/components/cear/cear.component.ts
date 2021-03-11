import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/pages/models/TarjetaCredito';

@Component({
  selector: 'app-cear',
  templateUrl: './cear.component.html',
  styleUrls: ['./cear.component.css']
})
export class CearComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initForm();
    // this.initValuesForm();
  }

  /*  lastName: string;
    numTarjeta: string;
    fechaExpiracion: string;
    cvv: number; */

    private initForm(): void{
      this.myForm = this.fb.group({
        name:['',[Validators.required, 
                              Validators.maxLength(15)]], //,this.notValidtData.bind(this)
        lastName:['',[Validators.required, 
                      Validators.maxLength(15)]],
        numTarjeta:['',[Validators.required, 
                      Validators.maxLength(10)
                      ,Validators.minLength(10)]],
        fechaExpiracion:['',[Validators.required, 
                            Validators.maxLength(5),
                            Validators.minLength(5)]],
        cvv:['',[Validators.required, 
                Validators.maxLength(3),
                Validators.minLength(3), 
                Validators.pattern(/^[1-9]+[0-9]*$/)]],
      })
    }

    private initValuesForm(): void{
      this.myForm.patchValue({
        name: 'Lucas',
        lastName: 'Prodan'
      });
  
     /*  this.myForm.disable(); */
    }

    create(){ 
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

      
      console.log('tarjeta', TARJETA);
      
      confirm(this.myForm.controls.lastName.value + 'FORM ' + this.myForm.valid);
      confirm(this.myForm.get("lastName")?.value + 'FORM ' + this.myForm.valid);
      console.log(this.myForm);
      
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

}
