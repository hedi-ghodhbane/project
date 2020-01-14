import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.mode';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizTable = [
      new Quiz("what's React Js " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0  , false  )  ,
      new Quiz("Inside which HTML element do we put the JavaScript? " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0 , false  )  ,
      new Quiz("what's React Js " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0 , false  )  ,
      new Quiz("what's React Js " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0 , false   )  ,
      new Quiz("what's React Js " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0 , false  )  ,
      new Quiz("what's React Js " , [
        "it's a programming language" ,
        "it's a tool for programming" ,
        "it's a server-side language"
      ] , 0 , false  )  ,
  ] ;
  last : string ="next" ;
  first : boolean = true ;
  i :number = 0 ;
  resultStr : string;
  correct : number =0 ;
  notAnswerd : number = 0 ;
  pourcentage : number ;
  questionsAnswerd : number = 0  ;
  Time : string = "00:00"
  currentQuestion : Quiz ;
  submitted : boolean = false ;
  textButton : string = "valider" ;
  constructor() { }
  handleSubmit(e){
  this.currentQuestion.answer = e.target.answ.value ;
  this.currentQuestion.validated = true ;
  }
  ngOnInit() {
    this.currentQuestion = this.quizTable[this.i];
  }
  changeCurrent(count:number){
    this.i += count ;
    if (this.i==(this.quizTable.length)-1) {this.last = "resultat" ;  } else {this.last="next" ; }
    if(this.i==(this.quizTable.length)) {
      this.quizTable.forEach(quiz=>{
          if (quiz.result()){
            this.correct++ ;
          }
          if (quiz.validated){
            this.questionsAnswerd++ ;
          }
      })
      this.pourcentage = Math.round((this.correct / this.quizTable.length) * 100) ;
      this.resultStr =this.pourcentage >=70 ? "Passed" : "failed" ;
      this.submitted = true ;
    }
    if ( this.i !=0 ) {this.first = false} else {this.first=true} ;
    this.currentQuestion= this.quizTable[this.i]
  }

}
