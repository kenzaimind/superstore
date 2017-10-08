import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { ToolbarComponent } from './client/toolbar/toolbar.component';
import { SidebarComponent } from './client/sidebar/sidebar.component';
import { HeadersComponent } from './client/headers/headers.component';
import { FormComponent } from './client/form/form.component';
import { ExoticVegetablesComponent } from './client/exotic-vegetables/exotic-vegetables.component';
import { BrandedFoodComponent } from './client/branded-food/branded-food.component';
import { FreshVegetablesComponent } from './client/fresh-vegetables/fresh-vegetables.component';
import { FruitsComponent } from './client/fruits/fruits.component';
import { MushroomsComponent } from './client/exotic-vegetables/mushrooms/mushrooms.component';
import { AppleComponent } from './client/fruits/apple/apple.component';
import { BananaComponent } from './client/fruits/banana/banana.component';
import { BroccoliComponent } from './client/exotic-vegetables/broccoli/broccoli.component';
import { BrinjalComponent } from './client/fresh-vegetables/brinjal/brinjal.component';
import { CabbageComponent } from './client/fresh-vegetables/cabbage/cabbage.component';
import { RegisterComponent } from './client/user/register/register.component';
import { UserComponent } from './client/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './client/routes.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuardService } from './client/auth/authguard.service';
import { AuthService } from './client/auth/auth.service';
import { CartService } from './client/auth/cart.service';
import { ErrorService } from './client/errorHandler/error.service';
import { ToastModule, ToastOptions } from 'ng2-toastr';
//import {FlashMessagesModule} from 'angular2-flash-messages';
import { ContactComponent } from './client/contact/contact.component';
import { LoginComponent } from './client/user/login/login.component';
import { ErrorComponent } from './client/errorHandler/error.component';
import { MainPageComponent } from './client/mainPage/mainPage.component';
import { ToordalComponent } from './client/toordal/toordal.component';
import { ResetPasswordComponent } from './client/user/accountRecover/resetPassword.component';
import { ForgetPasswordComponent } from './client/user/accountRecover/forgetPassword.component';
import { FormService } from './client/form/form.service';
import { UserFormComponent } from './client/userForms/userForms.component';
import { ProgressBarModule } from 'ngx-progress-bar';
import { FooterComponent } from './client/footer/footer.component';
import { MoongdalpageComponent } from './client/moongdalpage/moongdalpage.component';

import { BlinkDirective } from './client/blink.directive';
import { CartComponent } from './client/user/cart/cart.component';

import { CarouselComponent } from './client/carousel/carousel.component';
import { MidpageComponent } from './client/midpage/midpage.component';
import { MycarouselComponent } from './client/mycarousel/mycarousel.component';
import { FeaturesComponent } from './client/features/features.component';
import { ProductsComponent } from './client/products/products.component';
import { GroceriesComponent } from './client/groceries/groceries.component';
import { SinglepageComponent } from './client/singlepage/singlepage.component';
import { DetailsComponent } from './client/details/details.component';
import { MoreinfoComponent } from './client/moreinfo/moreinfo.component';
import { DryfruitsComponent } from './client/dryfruits/dryfruits.component';
import { SearchgroceryComponent } from './client/searchgrocery/searchgrocery.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { ProfileComponent } from './client/user/profile/profile.component';
import { ChangePasswordComponent } from './client/user/profile/changepassword/changepassword.component';
import { OffersComponent } from './client/offers/offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './client/auth/profile.service';

let options = <ToastOptions>{
  animate: 'flyRight',
  positionClass: 'toast-top-right',
};

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    ProfileComponent,
    DetailsComponent,
    BlinkDirective,
    BananaComponent,
    MushroomsComponent,
    ExoticVegetablesComponent,
    ChangePasswordComponent,
    MoreinfoComponent,
    FruitsComponent,
    DryfruitsComponent,
    BrandedFoodComponent,
    BrinjalComponent,
    FreshVegetablesComponent,
    CheckoutComponent,
    SearchgroceryComponent,
    NavbarComponent,
    AppleComponent,
    FormComponent,
    UserComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    BroccoliComponent,
    CabbageComponent,
    SidebarComponent,
    ErrorComponent,
    MainPageComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    UserFormComponent,
    FooterComponent,
    ToordalComponent,

    FruitsComponent,

    CartComponent,

    MoongdalpageComponent,

    HeadersComponent,
    CarouselComponent,
    MidpageComponent,
    MycarouselComponent,
    FeaturesComponent,
    ProductsComponent,
    GroceriesComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    routing,
    ToastModule.forRoot(),
    ProgressBarModule,
    BrowserAnimationsModule
    //FlashMessagesModule
  ],
  providers: [
    AuthGuardService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
    ErrorService,
    FormService,
    CartService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
