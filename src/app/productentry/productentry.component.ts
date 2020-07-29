import { Component, OnInit } from '@angular/core';
import {Product}  from '../product'
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  
model:Product
  constructor() { 
    console.log("constructor")
  }

  ngOnInit(): void {
    // console.log("init fuction")
this.model=new Product("","",0)
  }
 save(){
   console.log("fuctioncalled")
console.log(this.model)
 }}
  


