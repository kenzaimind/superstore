import { Component } from '@angular/core';
import { CartService } from '../auth/cart.service';
import { Router } from '@angular/router';
import { Grocery } from '../auth/grocery.model';
@Component({
  
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  title = 'PayPal Test';
   private cartItems: Grocery[] = [];
  constructor(private cartService: CartService, private _router: Router) {
    console.log(this.cartItems);
   this.cartItems = cartService.getCart();
   console.log(this.cartItems);
   
  }
}