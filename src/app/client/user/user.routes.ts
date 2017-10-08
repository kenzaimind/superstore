import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetPasswordComponent} from './accountRecover/resetPassword.component';
import {ForgetPasswordComponent} from './accountRecover/forgetPassword.component';
import {UserFormComponent} from '../userForms/userForms.component';
import {AuthGuardService} from '../auth/authguard.service';
import {CartComponent} from './cart/cart.component';
import { DetailsComponent } from '../details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/changepassword/changepassword.component';


export const USER_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset', component: ForgetPasswordComponent},
  {path: 'reset/:token', component: ResetPasswordComponent},
  {path: 'forms', component: UserFormComponent, canActivate: [AuthGuardService]},
  {path: 'cart', component:CartComponent, canActivate: [AuthGuardService]},
  {path:'details',component:DetailsComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'profile/password', component: ChangePasswordComponent, canActivate: [AuthGuardService] },
];
