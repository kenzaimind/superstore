import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';//this for json
import { ToastsManager } from 'ng2-toastr';//this is for popup
import { ErrorService } from '../errorHandler/error.service';
import { Grocery } from './grocery.model';

@Injectable()
export class GroceryService {
    app: Grocery[] = [];
    constructor(private http: Http, private errorService: ErrorService, private toastr: ToastsManager) { }
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
    getvegitables() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/groceryveg', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    getGroceryall() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/groceryall', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    getGrocery() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/grocery', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    exoticvegitables() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/exoticvegitables', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
        brandedfood() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/brandedfood', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
        getfruits() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/fruits', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
        getapples() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/apples', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
        getbanana() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/banana', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    freshvegitables() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/freshvegitables', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
        getmushrooms() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/mushrooms', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
         getbrinjal() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/brinjal', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
 getcabbage() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/cabbage', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }


    getbroccoli() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/broccoli', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    getGrocery1(sno) {
        console.log(sno);

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/groceryinfo/' + sno, { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }
    searchGrocery(search) {
        console.log(search);

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/grocerysearch/' + search, { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }
    getdryfruits() {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.get('http://localhost:3000/groceryrout/grocerydry', { headers: headers })
            .map((res: Response) => {
                console.log(res);
                //console.log( "hey hai:"+res.json().grocerys);
                const fru = res.json().grocerys;//apples is database table name and u can retrive full data from database
                console.log(fru);
                this.app = fru;
                console.log(this.app);
                let grocerys = [];
                for (let grocery of fru) {
                    grocerys.push(grocery);
                }
                //console.log(selectedfruits);
                console.log(this.app);
                this.app = grocerys;
                console.log(this.app);
                return grocerys;

            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })

    }

}