import { Component, OnInit } from '@angular/core';
// import {ShoppingcartComponent} from '../shoppingcart/shoppingcart.component'

import { ShoppingService } from '../shopping.service';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { Product } from '../product';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {
cartitems=[]
total = 0;

// items = [];
  constructor( private obj:ShoppingService) { 
   
 
  }

  ngOnInit(): void {
    this.cartitems=this.obj.cart
    
    this.cartitems.forEach(item =>{
      this.total+= item.quatity * item.price
    })
   
    // let productExists:false

    // for(let i in this.cartitems){

    //   if(this.cartitems[i].productid===productid)
    // } 
}}






