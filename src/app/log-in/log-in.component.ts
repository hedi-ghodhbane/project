import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  isAuth: boolean;
  constructor(private authService: AuthService , private route : Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }


  signInUser(email, password) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(
          () => {
            resolve();
            this.route.navigate(['/profil']);
            console.log("logged in ");
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

}
