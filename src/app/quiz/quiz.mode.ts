export class Quiz {
  public answer : string ;
  constructor(public question : string , public options : [string,string,string], public correctAnswer : number , public validated : boolean  ){}
  result(){
    if ( parseInt(this.answer) == this.correctAnswer) {
      return true ;
    }
    return false ;
  }
}
