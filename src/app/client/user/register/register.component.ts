import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../auth/user.model';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  //firstname : FormControl;
  //lastname : FormControl;
  email: FormControl;
  password: FormControl;
  //address: FormControl;
  contact: FormControl;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router, private toastr: ToastsManager) {
  }

  ngOnInit() {

    // if the user tries to hit the register page, first we check if he is logged in or not, if he is then we redirect him to the form page
    if (this._authService.isLoggedIn()) {
      this._router.navigateByUrl('/form');
    }

   // this.firstname = new FormControl('',[<any>Validators.required]);
    //this.lastname = new FormControl('',[<any>Validators.required]);
    this.email = new FormControl('', [Validators.required, this.emailValidator]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
   // this.address = new FormControl('',[<any>Validators.required]);
    this.contact = new FormControl('',[<any>Validators.required]);

    this.myForm = this._fb.group({
      //firstname:this.firstname,
      //lastname:this.lastname,
      email: this.email,
      password: this.password,
      //address:this.address,
      contact:this.contact,
    });
  }

  // submit the register form to the backend with the user's desired credentials
  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password,this.myForm.value.contact);
    this._authService.signup(user)
      .subscribe(
        data => {
          // after successfull registration, the user is redirected to the login page
          this._router.navigate(['/user/login']);
          // toastr message pops up to inform user that the registration was successfull
          this.toastr.success('Please Login', 'Registration Successfull');
        }
      );
  }

// input validator to check if the email entered by the user is actually text in an email form
  emailValidator(control) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (!EMAIL_REGEXP.test(control.value)) {
      return {invalidEmail: true};
    }
  }
}
