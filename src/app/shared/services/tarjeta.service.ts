import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import { TarjetaCredito } from '../../pages/models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  /* private provideGoogle = new auth.GoogleAuthProvider();
  private provideFace = new auth.FacebookAuthProvider();
  private tweeter = new auth.TwitterAuthProvider(); */

  constructor(private firebase: AngularFirestore,
    private fireAuth: AngularFireAuth) {

  }

  guardarTarjetaFirestore(tarjeta: TarjetaCredito): Promise<any> {
    return this.firebase.collection('tarjetas').add(tarjeta);
  }

  getTarjetas(): Observable<any>{
    return this.firebase.collection('tarjetas').snapshotChanges();
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

  /* mostrardatos() {
    const db = firebase.firestore();
  } */


}
