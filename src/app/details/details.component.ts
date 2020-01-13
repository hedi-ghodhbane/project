import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  text : String  ;
  id : number ;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
   this.id = this.route.snapshot.params['id'];
   console.log(this.id);
   switch(this.id.toString()){
     case '0' : this.text = "cours" ; break ;
     case '1' :this.text = "quiz" ; break ;
     case '2' :this.text = "test" ; break ;
     default : break ;
   }
   console.log(this.text)
  }

}
