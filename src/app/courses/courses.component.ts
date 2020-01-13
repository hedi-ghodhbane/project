import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    "JavaScript",
    "Css",
    "Html" ,
    "Php" ,
    "Sql" ,
    "systémes réparties"

  ] ;
  constructor(private router : Router) { }

  ngOnInit() {
  }

}
