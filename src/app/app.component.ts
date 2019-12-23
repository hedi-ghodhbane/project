import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const config = {
      apiKey: "AIzaSyC-m2xysIkuUyE9z4gR4O2nal_JK9up1EU",
      authDomain: "bioit-76e8a.firebaseapp.com",
      databaseURL: "https://bioit-76e8a.firebaseio.com",
      projectId: "bioit-76e8a",
      storageBucket: "bioit-76e8a.appspot.com",
      messagingSenderId: "970836733542",
      appId: "1:970836733542:web:b40faf63f26883c20907a7",
      measurementId: "G-885VC1LS0E"
    };
    firebase.initializeApp(config);
  }

}
