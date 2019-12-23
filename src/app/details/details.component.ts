import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  items = [] ;
  id : number ;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
   this.id = this.route.snapshot.params['id'];
   console.log(this.id);
   switch(this.id.toString()){
     case '0' : this.items = [
       {src:"https://www.francetvinfo.fr/image/759r5hexb-881d/580/326/10448331.jpg",title:"Investir dans la valorisation des  Dechets",more:" production de biocarburant + production du colorants  "},
       {src:"https://www.millionnairezine.com/wp-content/uploads/2016/03/investir-terre-agricole-e1459402232433.jpg",title:"Trouver des terrains ",more:" On vous aide à trouver des terrains et des  experts qui vous aide pour entrer dans le domaine"},
       {src:"https://static.lebulletin.com/wp-content/uploads/2017/09/soya-grain.jpg",title:"Vendre des graines",more:" on achéte une grande quantité du grains "},
     ] ; break ;
     case '1' :this.items = [
      {src:"https://d16pv0nd7chced.cloudfront.net/img/p/3/3-cover_large.jpg",title:"Pack Gratuit",more:"on vous offre la possibilité de vendre vos déchets + Aide sur le platform "},
      {src:"http://pc-help24.com/sites/all/themes/theme934/images/silver_pack",title:"Pack Silver",more:"Accés aux consultants et aide sur Terrain + possibilité de vendre vos déchets "},
      {src:"http://www.marocbikhir.com/oc-content/uploads/142752.jpg",title:"Pack Gold",more:" Accés aux consultants et aide sur Terrain + possibilité de vendre vos déchets + accés aux investisseurs"},

     ] ; break ;
     case '2' :this.items = [
      {src:"https://www.caia.net/ressources/temp/80_820t506_798516687_1667070719_2019123241-1559817159-headerrelease.jpeg",title:"offrir des services",more:"selon votre domaine "},
      {src:"http://www.ietech-group.com/wp-content/uploads/2019/02/formation2.jpg",title:"Offrir des Formations ",more:"en ligne ou sur Terrain"},
      {src:"https://www.generali.fr/sites/default/files-d8/2019-08/1170x480-etapes-achat-terre-agricole.jpg",title:"Aider Sur Terrain",more:"Aider les agriculteurs sur Terrain "},

     ] ; break ;
     default : break ;
   }
   console.log(this.items)
  }

}
