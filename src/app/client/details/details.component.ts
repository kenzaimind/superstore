import { Component, OnInit } from '@angular/core';
import { CartService } from '../auth/cart.service';
import { Router } from '@angular/router';
import { Grocery } from '../auth/grocery.model';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',


})
export class DetailsComponent implements OnInit {

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
  addToCart(grocery) {
    console.log(grocery);
    this.cartService.addItem(grocery);
    console.log(this.cartService.getTotalPrice());
    console.log(this.cartService.getTotalItem())

  }
  delete(sno) {
    this.cartService.minusCount(sno);
  }
  deleteItem(item) {
    this.cartService.deleteItem(item);
  }
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
  clear() {
    this.cartService.clearCart();
    this._router.navigate(['/']);
  }
  ngOnInit() {
  }

}
