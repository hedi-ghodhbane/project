import { Component, OnInit } from '@angular/core';
import { CardModel } from './card.mode';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  cards = [
    new CardModel("investisseur","https://caritey-remere.com/wp-content/uploads/sites/4/2015/05/investissement-solidaire.png","pour investir ..."),
    new CardModel("agriculteur","https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1707/sergeypykhonin170700096/82338065-logo-agriculteur-jardinier-produit-agricole-agriculture-jardinage-horticulture-label-agricole-ou-ic%C3%B4ne-.jpg","pour beneficer ..."),
    new CardModel("vet ","https://st3.depositphotos.com/4265001/14374/v/1600/depositphotos_143742747-stock-illustration-cow-logo-illustration.jpg","pour aider ..."),
  ]
  constructor() { }
  ngOnInit() {
  }

}
