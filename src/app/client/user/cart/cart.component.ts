import { Component, OnInit } from '@angular/core';
import { CartService } from '../../auth/cart.service';
import { Router } from '@angular/router';
import { Grocery } from '../../auth/grocery.model';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit {

  private cartItems: Grocery[] = [];
  constructor(private cartService: CartService, private _router: Router) {
    console.log(this.cartItems);
   this.cartItems = cartService.getCart();
   console.log(this.cartItems);
   
  }
  
  /*onDelete(id) {
    this.selectedfruitsService.removeItem(id)
      .subscribe();
  }
  check() {
    this.selectedfruitsService.check()
      .subscribe();
  }*/
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
  ngOnInit() {
  }

}
