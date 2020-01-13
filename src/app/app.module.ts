import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { DeclarationsComponent } from './declarations/declarations.component';
import { ProfilComponent } from './profil/profil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { ServicesComponent } from './services/services.component';
import { ServComponent } from './serv/serv.component';
import { DetailServComponent } from './detail-serv/detail-serv.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestComponent } from './test/test.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AboutComponent,
    SignUpComponent,
    LogInComponent,
    DeclarationsComponent,
    ProfilComponent,
    NotFoundComponent,
    NavigationComponent,
    DetailsComponent,
    ServicesComponent,
    ServComponent,
    DetailServComponent,
    QuizComponent,
    TestComponent,
    CoursesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
