import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from '../../auth/grocery.model';
import { GroceryService } from '../../auth/grocery.service';
import { CartService } from '../../auth/cart.service';
import { BlinkDirective } from '../../blink.directive';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css'],
  providers: [GroceryService]
})
export class BananaComponent implements OnInit {
  @Input() grocerys: Grocery;
  constructor(private groceryService: GroceryService, private cartService: CartService, private _router: Router) {
    groceryService.getbanana().subscribe(res => {


      this.grocerys = res;
    })

  }
  addToCart(grocery) {
    console.log(grocery);
    this.cartService.addItem(grocery);
    console.log(this.cartService.getTotalPrice());
    console.log(this.cartService.getTotalItem())

  }
  ngOnInit() {
  }
}


