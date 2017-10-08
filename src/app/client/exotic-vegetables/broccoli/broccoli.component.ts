import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from '../../auth/grocery.model';
import { GroceryService } from '../../auth/grocery.service';
import { CartService } from '../../auth/cart.service';
import { BlinkDirective } from '../../blink.directive';

@Component({
  selector: 'app-broccoli',
  templateUrl: './broccoli.component.html',
  styleUrls: ['./broccoli.component.css'],
  providers: [GroceryService]
})
export class BroccoliComponent implements OnInit {
@Input() grocerys: Grocery;
  constructor(private groceryService: GroceryService, private cartService: CartService, private _router: Router) {
    groceryService.getbroccoli().subscribe(res => {


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
