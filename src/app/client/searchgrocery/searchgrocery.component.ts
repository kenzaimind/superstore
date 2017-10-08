import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Grocery } from '../auth/grocery.model';
import { GroceryService } from '../auth/grocery.service';
import { CartService } from '../auth/cart.service';
import { BlinkDirective } from '../blink.directive';
@Component({
    selector: 'app-searchgrocery',
    templateUrl: './searchgrocery.component.html',
    styleUrls: ['./searchgrocery.component.css'],
    providers:[GroceryService]
})
export class SearchgroceryComponent implements OnInit {
    search:Grocery[]=[];
    grocerys: Grocery[];
    private sub: any;
    constructor(private router: ActivatedRoute,private groceryService: GroceryService,private cartService: CartService) {
       groceryService.getGroceryall().subscribe(res => {


      this.grocerys = res;

       this.router.queryParams.forEach((queryParams:any) => {
                console.log('params = ',queryParams);
                this.search = this.grocerys.filter(elem => {
                    if (~elem.name.toLowerCase().indexOf(queryParams['search'])||~elem.type.toLowerCase().indexOf(queryParams['search'])) return elem;
                });
                console.log(this.search)
            })
    })
    }
    loadSearch(search:string){
        console.log(search);
        this.groceryService.searchGrocery(search).subscribe(res => {
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
