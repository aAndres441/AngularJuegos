import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable, Subject } from 'rxjs';

import { TarjetaCredito } from '../../pages/models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  /* private provideGoogle = new auth.GoogleAuthProvider();
  private provideFace = new auth.FacebookAuthProvider();
  private tweeter = new auth.TwitterAuthProvider(); */

  lengthChanged$ = new Subject<number>();
  listLength=0;
  private tarjeta$ = new Subject<any>(); //ahora emite setTarjeta y otro compo suscribe getTarjeta
  private error$ = new Subject<string>();

  /* const functions = require('firebase-functions') */

  constructor(private firestore: AngularFirestore,
    private fireAuth: AngularFireAuth) {

  }

  guardarTarjetaFirestore(tarjeta: TarjetaCredito): Promise<any> {
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  getTarjetas(): Observable<any>{
    /* this.mostrardatos(); */
    return this.firestore
    .collection('tarjetas',ref => ref.orderBy('name', 'desc'))
    .snapshotChanges();
  }

  delete(id:string): Promise<any>{ //retorna any asi que  id para delete y edit sera any
   return this.firestore
            .collection('tarjetas')
            .doc(id).delete();
  }

  edit(tarj:any, id:any): Promise<any> {
    console.log('tarj'+tarj.name);
    
   return this.firestore
      .collection('tarjetas')
      .doc(id).update(tarj);
  }

  setError(msj: string): void {
    this.error$.next(msj);
  }
  getError(): Observable<string> {
    return this.error$.asObservable();
    // asObservable Creates a new Observable with this Subject as the source.
  }

  getTarjeta():Observable<TarjetaCredito> {
    return this.tarjeta$.asObservable();
  }
  
  setTarjeta(tarj:TarjetaCredito): void{
    this.tarjeta$.next(tarj);
  }


  /********************* * AUTHENTICATION ********************************/

  /*   onLogingoogle() {
      return this.fireAuth.signInWithPopup(new provideGoogle);
    }
  
    onLoginFace() {
      return this.fireAuth.signInWithPopup(this.provideFace);
    } */

  onLogoutUser() {
    alert('SALE con RANDOM ' + Math.random());
    return this.fireAuth.signOut();
  }

  ////////////////  USER  /////////////////////////////
  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  mostrardatos() {
    const db = this.firestore.firestore;
    const docRef = this.firestore.doc;
    const collectionRef = this.firestore.collection;
    const collectionRef2 = this.firestore.collection('tarjetas');    
    const collectionRef3 = this.firestore.collection('tarjetas').ref.firestore.app.options.valueOf();    
    
    console.log(db,'***',docRef,'....',collectionRef,'+++',collectionRef2);
    console.log('***',collectionRef3,'....');
    
    /*   id: element.payload.doc.id,
      ...element.payload.doc.data() */
    
  }


}
