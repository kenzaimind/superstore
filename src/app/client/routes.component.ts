import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FruitsComponent } from './fruits/fruits.component';
import { USER_ROUTES } from './user/user.routes';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './auth/authguard.service';
import { MainPageComponent } from './mainPage/mainPage.component';

import { CartComponent } from './user/cart/cart.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/accountRecover/resetPassword.component';
import { ForgetPasswordComponent } from './user/accountRecover/forgetPassword.component';
import { UserFormComponent } from './userForms/userForms.component';
import { OffersComponent } from './offers/offers.component';

import { BrandedFoodComponent } from './branded-food/branded-food.component';
import { FreshVegetablesComponent } from './fresh-vegetables/fresh-vegetables.component';
import { HeadersComponent } from './headers/headers.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MidpageComponent } from './midpage/midpage.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { ToordalComponent } from './toordal/toordal.component';
import { MoongdalpageComponent } from './moongdalpage/moongdalpage.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { SearchgroceryComponent } from './searchgrocery/searchgrocery.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChangePasswordComponent } from './user/profile/changepassword/changepassword.component';
import { ExoticVegetablesComponent } from './exotic-vegetables/exotic-vegetables.component';
import { MushroomsComponent } from './exotic-vegetables/mushrooms/mushrooms.component';
import { BroccoliComponent } from './exotic-vegetables/broccoli/broccoli.component';
import { BrinjalComponent } from './fresh-vegetables/brinjal/brinjal.component';
import { CabbageComponent } from './fresh-vegetables/cabbage/cabbage.component';
import { AppleComponent } from './fruits/apple/apple.component';
import { BananaComponent } from './fruits/banana/banana.component';


const APP_ROUTES: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'user', component: UserComponent, children: USER_ROUTES },

  { path: 'form', component: FormComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ForgetPasswordComponent },
  { path: 'reset/:token', component: ResetPasswordComponent },
  { path: 'forms', component: UserFormComponent, canActivate: [AuthGuardService] },

  { path: 'cart', component: CartComponent, canActivate: [AuthGuardService] },

  { path: 'groceries', component: GroceriesComponent },
  { path: 'singlepage', component: SinglepageComponent },
  { path: 'toordal', component: ToordalComponent, canActivate: [AuthGuardService] },
  { path: 'moongdalpage', component: MoongdalpageComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'moreinfo/:sno', component: MoreinfoComponent },
  { path: 'dryfruits', component: DryfruitsComponent },
  { path: 'searchgrocery', component: SearchgroceryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/password', component: ChangePasswordComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'offers', component: OffersComponent },
  { path: 'exotic-vegetables', component: ExoticVegetablesComponent },
   { path: 'branded-food', component: BrandedFoodComponent },
  { path: 'fresh-vegetables', component: FreshVegetablesComponent },
  { path: 'exotic-vegetables/mushrooms', component: MushroomsComponent },
  { path: 'exotic-vegetables/broccoli', component: BroccoliComponent },
  { path: 'fresh-vegetables/brinjal', component: BrinjalComponent },
  { path: 'fresh-vegetables/cabbage', component: CabbageComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'fruits/apple', component: AppleComponent },
   { path: 'fruits/banana', component: BananaComponent }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
