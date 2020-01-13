import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit {
   items = [
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"Cours JavaScript",desc:"Cous Js complet " , linkTitle : "Download Pdf JavaScript" , linkSrc : "http://www-igm.univ-mlv.fr/~lecroq/cours/javascript.pdf" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"Cours HTML",desc:"Cours HTML Complet" , linkTitle : "Download Pdf HTML" , linkSrc : "http://www-igm.univ-mlv.fr/~lecroq/cours/javascript.pdf" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"Cours Css",desc:"Cours Css Complet" , linkTitle : "Download Pdf Css" , linkSrc : "http://www-igm.univ-mlv.fr/~lecroq/cours/javascript.pdf" },
   ]
  inv : boolean ;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  seeMore(){
    this.router.navigate(['/detailserv'])
  }

}
