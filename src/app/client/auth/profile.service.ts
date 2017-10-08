import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';//this for json
import { ToastsManager } from 'ng2-toastr';//this is for popup
import { ErrorService } from '../errorHandler/error.service';
import { UserProfile } from './profile.model';
import { AuthService } from '../auth/auth.service';
import { newPassword } from '../auth/profile.model';

@Injectable()
export class ProfileService {

    constructor(private http: Http, private errorService: ErrorService, private toastr: ToastsManager, private authService: AuthService) { }

    // get user details from database to display them in front end profile page
    getUserDetails(userId) {

        if (this.authService.isLoggedIn()) {
            let token = localStorage.getItem('token');
            let userId = localStorage.getItem('userId');

            let headers = new Headers({ 'Content-Type': 'application/json' });
            headers.append('Authorization', '' + token);
            return this.http.get('http://localhost:3000/profilerout/userprofile/' + userId, { headers: headers })
                .map((response: Response) => response.json())
                .catch((error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
        }
    }
// submit the new password via the form in front end
  newPassword(newPass: newPassword) {
      console.log(newPass);
    if (this.authService.isLoggedIn()) {
      let token = localStorage.getItem('token');
       let userId = localStorage.getItem('userId');
      console.log(token);
      const body = JSON.stringify(newPass);
      console.log(body);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Authorization', '' + token);
      return this.http.post('http://localhost:3000/profilerout/password/'+ userId, body, { headers: headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          this.errorService.handleError((error.json()));
          return Observable.throw(error.json());
        });
    }
  }

}