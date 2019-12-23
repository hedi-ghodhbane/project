import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit {
   items = [
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
     { src:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" , title:"John Doe",desc:"Consultant" },
   ]
   invest = [
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },
    { src:"http://www.legorafi.fr/wp-content/uploads/2016/09/iStock_84615769_SMALL-e1474531457886-820x410.jpg" , title:"John Doe",desc:"Investisseur" },

  ]
  inv : boolean ;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  seeMore(){
    this.router.navigate(['/detailserv'])
  }

}
