import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { Grocery } from '../auth/grocery.model';
import { GroceryService } from '../auth/grocery.service';
import { CartService } from '../auth/cart.service';
import { BlinkDirective } from '../blink.directive';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers:[GroceryService],
 
   
   
})
export class OffersComponent implements OnInit {
 @Input() grocerys: Grocery;
 //@Input() grocery: Grocery;
  private userId: string = localStorage.getItem('userId');
 constructor(private groceryService: GroceryService,private cartService:CartService, private _router: Router) {

    groceryService.getGroceryall().subscribe(res => {


      this.grocerys = res;
      console.log(this.userId);
    })

  }
  addToCart(grocery){
    
   
        this.cartService.addItem(grocery);
        console.log(this.cartService.getTotalPrice());
        console.log(this.cartService.getTotalItem())

    }
  

  ngOnInit() {
    //this.grocerydalsService.getDals().subscribe(res => {
      //this.grocerydals = res;
      
    //})
  }
  

}