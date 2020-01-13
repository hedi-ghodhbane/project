import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutComponent } from './about/about.component';
import { DeclarationsComponent } from './declarations/declarations.component';
import { ProfilComponent } from './profil/profil.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { DetailsComponent } from './details/details.component';
import { ServComponent } from './serv/serv.component';
import { DetailServComponent } from './detail-serv/detail-serv.component';
import { TestComponent } from './test/test.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
 {path:'',component:AcceuilComponent},
 {path:'about',component:AboutComponent},
 {path:'declarations',component:DeclarationsComponent},
 {path:'profil',component:ProfilComponent},
 {path:'signup',component:SignUpComponent},
 {path:'login',component:LogInComponent},
 {path:'details/:id',component:DetailsComponent},
 {path:'detailserv',component:DetailServComponent},
 {path : 'service' , component:ServComponent},
 {path : 'quiz' , component:QuizComponent},
 {path : 'test' , component:TestComponent},
 {path : 'courses' , component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
