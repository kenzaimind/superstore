import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';//this for json
import { ToastsManager } from 'ng2-toastr';//this is for popup
import { ErrorService } from '../errorHandler/error.service';
import { Selectedfruit } from './selectedfruit.model';
var sha512 = require('sha512');

@Injectable()


export class SelectedfruitsService {
    private app: Selectedfruit[] = [];
    //private selectedfruits = [];
    constructor(private http: Http, private errorService: ErrorService, private toastr: ToastsManager) { }

    getFruits() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:3000/selectedrout/selectedfruit', { headers: headers })
            .map((res: Response) => {
               // console.log(res);
                const fru = res.json().selectedfruits;//apples is database table name and u can retrive full data from database
                console.log(fru);
                let selectedfruits = [];
                for (let selectedfruit of fru) {
                    selectedfruits.push(selectedfruit);
                }
                //console.log(selectedfruits);
                this.app = selectedfruits;
                return selectedfruits;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    removeItem(id) {
        this.app.splice(this.app.indexOf(id), 1);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.delete('http://localhost:3000/selectedrout/selectedfruit/' + id, { headers: headers })
            .map(res => res.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });

    }

    add(fruit) {
        const body = JSON.stringify(fruit);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/selectedrout/selectedfruit', body, { headers: headers })
            .map(res => res.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    getTotalPrice() {
        let totalPrice = this.app.reduce((sum, appSelectedfruit) => {
            return sum += appSelectedfruit.amount, sum;
        }, 0);

        return totalPrice;
    }
    check() {
        console.log("hi")
        var key = 'gmmStvBy';
       var txnid='5718510';
        var amount = '1000';
        var productinfo = 'iphone';
        var firstname = 'Naresh';
        var email = 'nmandaloji@ecognosys.com';
        var phone = '9640790797';
        var surl = 'https://payu.herokuapp.com/ios_success';
        var furl = 'https://payu.herokuapp.com/ios_failure';
        var SALT_PRODUCTION = 'z0frv60jVX';
        var Offer_key = 'test123@6622';
        var string = key  + '|'+ txnid + '|' + amount + '|' + productinfo + '|' + firstname + '|' + email + '|' + phone + '|' + surl + '|' + furl + '|' + SALT_PRODUCTION + '|' + Offer_key;

        var hash = sha512(string);
        //const body = JSON.stringify(check);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://secure.payu.in/_payment' + '?' + 'key=' + key + '&'  + 'txnid=' + txnid + '&' + 'amount=' + amount + '&' + 'productinfo=' + productinfo + '&' + 'firstname=' + firstname +
            '&' + 'email=' + email + '&' + 'phone=' + phone + '&' + 'surl=' + surl + '&' + 'furl=' + furl + '&' + 'SALT_PRODUCTION=' + SALT_PRODUCTION + '&' + 'Offer_key= ' + Offer_key + '&' + 'hash= ' + hash, { headers: headers })
            .map(res => res.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

}

