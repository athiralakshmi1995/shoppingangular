import { Component, OnInit } from '@angular/core';
import { ShoppingService} from '../shopping.service'
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor( private obj:ShoppingService) { }
  list:any=[];
  
x:any
sum: string
  ngOnInit(): void {
  
  this.obj.getData().subscribe((x)=>{
    console.log("json array",x)
   this.list=x
  console.log("arry",this.list)

  })
//   console.log("array js",this.list)
  }
  addtocart(product){
 this.obj.cart.push(product)
 console.log(this.obj.cart)
 }

   

 }



