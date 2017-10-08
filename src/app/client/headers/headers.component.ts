import { AuthService } from '../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form/form.service';
import { Form } from "../form/form.model";
import { ToastsManager } from "ng2-toastr";
import { CartService } from '../auth/cart.service';
import { Grocery } from '../auth/grocery.model';
import { GroceryService } from '../auth/grocery.service';
import { ProfileService } from '../auth/profile.service';
import { UserProfile } from '../auth/profile.model';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
  providers: [GroceryService]
})
export class HeadersComponent {
@Input() grocerys: Grocery;
   private cartItems: Grocery[] = [];
    user: UserProfile;
  fetchedUser: any[] = [];
  constructor(private groceryService: GroceryService,private cartService: CartService,private _authService:AuthService,private profileService: ProfileService) {
    groceryService.getGrocery().subscribe(res => {


      this.grocerys = res;
    })
    console.log(this.cartItems);
   this.cartItems = cartService.getCart();
   console.log(this.cartItems);
  }
 
  // check if user is logged in by asking our authentication service, we use this function in html file *ngIf directive
  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

  // this calls the logout function from our authentication service, it's activated when user clicks logout in front end.
  // It's called by the (click)='logout()' when the user presses the button
  logout() {
    return this._authService.logout();
  }
  ngOnInit() {
    if (this._authService.isLoggedIn()) {
      let userId = localStorage.getItem('userId');
      this.profileService.getUserDetails(userId)
        .subscribe(
          (data => {
            const userArray = [];
            for (let key in data) {
              userArray.push(data[key]);
            }
            this.fetchedUser = userArray;
          })
        );
    }
  }

}
