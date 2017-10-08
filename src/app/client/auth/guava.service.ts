import {Injectable} from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';//this for json
import {ToastsManager} from 'ng2-toastr';//this is for popup
import {ErrorService} from '../errorHandler/error.service';

@Injectable()


export class GuavaService{
    private app = [];
    constructor(private http: Http,private errorService: ErrorService, private toastr: ToastsManager){}
getFruits(){
     let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/guavarout/fruit',{headers: headers})
    .map((res:Response) =>{
     console.log(res);
     const fru = res.json().fruits;//apples is database table name and u can retrive full data from database
     let fruits =[];
     for(let fruit of fru)
     {
         fruits.push(fruit);
     }
     console.log(fruits);
     this.app = fruits;
     return fruits;

    })
    .catch((error: Response) =>{
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
    })
    
}


add(fruit){
    const body = JSON.stringify(fruit);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/guavarout/fruit',body,{headers: headers})
    .map(res => res.json())
    .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
}
}
