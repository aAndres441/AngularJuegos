import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.css']
})
export class OnOffComponent implements OnInit {


  title: string;
   /* itemSwitch: any; */
   view=false;
   altura=170;
  
  constructor() {
    this.title='change screen';  

   }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    
   
    

  }
  /* this.itemSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
  }) */

  onOff(){ 

    
    var witch = document.getElementById("main_switch");
  var card = document.getElementById('card');
  var main = document.getElementById('main');
  var title = document.getElementById('main_title');
  var main2 = document.body.children;//getElementById('main');
  //itemSwitch?.className = 'dark';   
  //witch?.classList.add('dark2');

  /* console.log('card ',card, 'main', main, 'itemSwitch', witch); */

  witch?.classList.toggle('dark2');
  witch?.classList.toggle('dark2');
  witch?.classList.toggle('dark2');
  witch?.classList.toggle('dark2');

 /*  if (itemSwitch === undefined || itemSwitch === null) {
    console.log('ok itemSwitch', itemSwitch);
  } if (card === undefined || card === null) {
    console.log('ok card', card);
  }
  if (main === undefined || main === null) {
    console.log('ok main', main);
  } else {
    console.log('FENIIII');

  } */
    /* itemSwitch?.className = 'dark';  */
    /* var elemento2 = document.getElementById("menu");    
   elemento2?.className =  'menu-fixed'; */

      //itemSwitch!.classList.toggle('dark');
    /* itemSwitch!.addEventListener('click', () => {
      console.log('PPPPPPPPPPPPPPP');     
    }) */
/* 
    alert('onOff()'); */

  }

  toogleView1() {
    this.view = !this.view;
  }

  cambiarAltura(event:any): void {
    this.altura = event.target.value;
    console.log('Altura ' + event.target.value);

    var res=document.getElementById("flexSwitchCheckDefault1");
    console.log('DOC',res!);
  }

  on_off( element:any){
    var r = confirm("¿Desea Cambiar de Estado?");
    /* if(element.returnValue'input').prop("checked")){
          if (!r) {
             e.preventDefault();
          }
       }else{
          if (!r) {
             e.preventDefault();
          }
       } */
       console.log('ELEMENT' , element.value);

       var res=document.getElementById("flexSwitchCheckDefault2");
    console.log('DOC1',res!);
       
     }
     province(){
      var res=document.getElementById("flexSwitchCheckDefault2");
      console.log('DOC2',res!);
     }


}
