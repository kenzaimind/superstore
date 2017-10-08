import { Injectable } from '@angular/core';
import { Grocery } from '../auth/grocery.model';


@Injectable()
export class CartService {
    private cart: Grocery[] = [];
    //private discount:IDiscount;
    cartCount: number = 0;
    cartSummaryPrice: number = 0;
    addItem(grocery: Grocery) {
        if (!~this.cart.indexOf(grocery)) {
            this.cart.push(Object.assign(grocery, { count: 1 }));
        } else {
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].sno == grocery.sno) {
                    this.cart[i].count++;
                }
            }
        }
        this.cartCount = 0;
        this.cartSummaryPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
            this.cartCount += this.cart[i].count;
            this.cartSummaryPrice += this.cart[i].discountprize * this.cart[i].count;
        }
        //console.log(grocery);
        //this.cart.push(grocery);
        //console.log(this.cart);
    }
    cartSummary() {
        return this.cartSummaryPrice;
    }
    deleteItem(item: Grocery) {
        //this.cart = this.cart.filter(cartItem=>cartItem.sno!==item.sno);
        console.log(item.discountprize);

        this.cart.splice(this.cart.indexOf(item), 1);
        this.cartSummaryPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
            console.log(this.cart[i].discountprize);
            console.log(this.cart[i].count);
            console.log(this.cart[i].discountprize * this.cart[i].count);
            this.cartSummaryPrice +=this.cart[i].discountprize * this.cart[i].count;
        }
    }
    clearCart() {
        this.cartSummaryPrice = 0;
        this.cart = [];
        return this.cart;
    }
    getCart(): Grocery[] {

        return this.cart;
    }

    minusCount(sno: string) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].sno == sno && this.cart[i].count > 1) {
                this.cart[i].count--;
                //this.cartCount--;
                this.cartSummaryPrice -= this.cart[i].discountprize;
            }
        }
    }


    getTotalItem() {
        let totalItem = this.cart.reduce((sum, cartItem) => {
            return sum += cartItem.count, sum;
        }, 0);

        return totalItem;
    }

    getTotalPrice() {
        let totalPrice = this.cart.reduce((sum, cartItem) => {
            return sum += cartItem.discountprize, sum;
        }, 0);

        return totalPrice;
    }

}