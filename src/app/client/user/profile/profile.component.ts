import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProfileService } from '../../auth/profile.service';
import { UserProfile } from '../../auth/profile.model';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers: [ProfileService]
})
export class ProfileComponent {
    private userId: string = localStorage.getItem('userId');
    private token: string = localStorage.getItem('id_token');

    user: UserProfile;
    fetchedUser: any[] = [];
    constructor(private _authService: AuthService, private profileService: ProfileService) {
        profileService.getUserDetails(this.userId).subscribe(data => {
         
            const userArray = [];
            for (let key in data) {
                userArray.push(data[key]);
            }
            this.fetchedUser = userArray;
            console.log(this.fetchedUser);

        })

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
}
