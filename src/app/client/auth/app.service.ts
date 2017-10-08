import {Injectable} from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';//this for json
import {ToastsManager} from 'ng2-toastr';//this is for popup
import {ErrorService} from '../errorHandler/error.service';

@Injectable()


export class AppleService{
private app = [];
    constructor(private http: Http,private errorService: ErrorService, private toastr: ToastsManager){}
getApples(){
     let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/applerout/apples1',{headers: headers})
    .map((res:Response) =>{
     console.log(res);
     const app = res.json().apples;//apples is database table name and u can retrive full data from database
     let apples =[];
     for(let apple of app)
     {
         apples.push(apple);
     }
     console.log(apples);
     this.app = apples;
     return apples;

    })
    .catch((error: Response) =>{
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
    })
    
}


add(apple){
    //console.log("abc" + apple);
    const body = JSON.stringify(apple);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/applerout/apple',body,{headers: headers})
    .map(res => res.json())
    .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
}



removeApple(id){
    return this.http.delete('http://localhost:3000/applerout/apple/'+ id)
    .map(res => res.json())
    .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });

}

}