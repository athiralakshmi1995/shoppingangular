import { Component, OnInit } from '@angular/core';
// import {ShoppingcartComponent} from '../shoppingcart/shoppingcart.component'

import { ShoppingService } from '../shopping.service';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {
cartitems=[]
total = 0;
// items = [];
  constructor( private obj:ShoppingService) { }

  ngOnInit(): void {
    this.cartitems=this.obj.cart
    
    this.cartitems.forEach(item =>{
      this.total+= item.quatity * item.price
    })
}


// loadCartview(obj){
// this.total=0

// // let cart = JSON.parse(localStorage.getItem('cart'));
// // for (var i = 0; i < cart.length; i++) {
//   // let item = JSON.parse(cart[i]);

//   // this.items.push({
//     product: obj.product
//     quatity: obj.quatity

//   this.total += obj.product.price * obj.quatity;
// }
// }
  
}



