import { Component, OnInit , Input } from '@angular/core';
import { CardModel } from './card.mode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  cards = [
    new CardModel("Cours","https://www.eicandenne.be/wp-content/uploads/2019/01/cours-jour-ico.png","des cours complets ","cour"),
    new CardModel("Quizs","https://oserchanger.com/blogue_2/wp-content/uploads/questionnaire-VAK-e1530825511313.jpg","approfondir  vos connaissances","quiz"),
    new CardModel("Tests ","https://www.pagepersonnel.be/sites/pagepersonnel.be/files/styles/large/public/career_center-interview-what%20exactly%20are%20aptitude%20tests.jpg?itok=OnLb2_B_","condition réels","test"),
  ]
  constructor(private router : Router) { }
  ngOnInit() {
  }
  goToDetail(i){
    console.log(i)
    this.router.navigate(['/details/'+i]) ;
  }

}
