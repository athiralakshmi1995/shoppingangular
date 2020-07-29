import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  value1:string=''
  value2:string=''
  result:number=0
  operator:string='';
  ngOnInit(): void {
  }
// add(){
//   console.log("fuction called")
  
//   this.sum=parseInt(this.value1)+parseInt(this.value2)
// }
// getevent(e){
// console.log("fuction called")
// console.log(e)
// }

getValue(num){

  if(this.value1==''){
    this.value1=num
    console.log("num1",this.value1)
  }
  else{
    this.value2=num
    console.log("num2",this.value2)
    this.calculate(this.operator)
  }
}
setOperator(oprtr){
console.log(oprtr)
this.operator=oprtr
if(oprtr=='=')
{
this.operator=''
}

}
calculate(oprtr){
console.log("calculate function")
console.log(oprtr)
if(oprtr=='+'){
  this.result=parseInt(this.value2)+parseInt(this.value1)
  console.log(this.result)
  console.log(oprtr)
}
if(oprtr=='-'){
  this.result=parseInt(this.value1)-parseInt(this.value2)
  console.log(this.result)
}
if(oprtr=='*'){
  this.result=parseInt(this.value2)*parseInt(this.value1)
  console.log(this.result)
}
if(oprtr=='/'){
  this.result=parseInt(this.value2)/parseInt(this.value1)
  console.log(this.result)
}

}
}