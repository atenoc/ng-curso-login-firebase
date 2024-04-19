import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  constructor(public afAuth: AngularFireAuth){}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.afAuth.auth.signInWithEmailAndPassword('user@gmail.com','123456')

    //this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //this.afAuth.auth.createUserWithEmailAndPassword()

    //firebase.auth().createUserWithEmailAndPassword("example@hotmail.com", "12345678");

  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
