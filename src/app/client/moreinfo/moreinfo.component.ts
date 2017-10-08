import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from '../auth/grocery.model';
import { GroceryService } from '../auth/grocery.service';
import { CartService } from '../auth/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'moreinfo',
    templateUrl: './moreinfo.component.html',
    styleUrls: ['./moreinfo.component.css'],
    providers: [GroceryService]


})
export class MoreinfoComponent implements OnInit {
    id: string;
    grocerys: Grocery;
    private sub: any;
    constructor(private groceryService: GroceryService, private cartService: CartService, private router: ActivatedRoute, private _router: Router) {

        //this.loadDetailsById(router.params.get("id"));
        this.sub = this.router.params.subscribe(params => {
            this.id = params['sno'];
            console.log(this.id);
        })
        /* this.router
             .queryParams
             .subscribe(params => {
                 let id: string = params['sno'];
                 console.log(id);
             })*/
       // console.log(this.sub);
       this.loadDetailsById(this.id);


    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    

    loadDetailsById(id: string) {
        console.log(id);
        this.groceryService.getGrocery1(id).subscribe(res => {
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
        //this.grocerydalsService.getDals().subscribe(res => {
        //this.grocerydals = res;

        //})
    }


}
