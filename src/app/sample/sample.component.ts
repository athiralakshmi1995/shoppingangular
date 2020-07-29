import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
title="my first component"
  constructor() { }

  ngOnInit(): void {
  }
  condition=true
  color:string
colors:string[]=["Red","blue","Yellow","Green"]
 check(){
   console.log(this.color)
}
}
// dpt:string[]=["cs","ece","it","eee"]
