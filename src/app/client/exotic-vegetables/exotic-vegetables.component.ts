import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from '../auth/grocery.model';
import { GroceryService } from '../auth/grocery.service';
import { CartService } from '../auth/cart.service';
import { BlinkDirective } from '../blink.directive';

@Component({
  selector: 'app-exotic-vegetables',
  templateUrl: './exotic-vegetables.component.html',
  styleUrls: ['./exotic-vegetables.component.css'],
  providers: [GroceryService]
})
export class ExoticVegetablesComponent implements OnInit {
  @Input() grocerys: Grocery;
  constructor(private groceryService: GroceryService, private cartService: CartService, private _router: Router) {
    groceryService.exoticvegitables().subscribe(res => {
      this.grocerys = res;
    })
  }

  addToCart(grocery) {
    console.log(grocery);
    this.cartService.addItem(grocery);
    console.log(this.cartService.getTotalPrice());
    console.log(this.cartService.getTotalItem());
  }


  ngOnInit() {
    //this.grocerydalsService.getDals().subscribe(res => {
    //this.grocerydals = res;

    //})
  }

}
