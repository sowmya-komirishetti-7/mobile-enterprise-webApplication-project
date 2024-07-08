import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  
} from '@abacritt/angularx-social-login';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'; 
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { CategorytableComponent } from './categorytable/categorytable.component';
import { CarttableComponent } from './carttable/carttable.component';


import { CruduserComponent } from './cruduser/cruduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { SearchPipe } from './search.pipe';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
// import { AddcartComponent } from './addcart/addcart.component';
// import { UpdatecartComponent } from './updatecart/updatecart.component';

const routes:Routes=[
  {path:"mobile",component:MobileComponent},
  {path:"",component:HeaderComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"adminpage",component:AdminpageComponent},
  {path:"userpage",component:UserpageComponent},
  {path:"productable",component:ProducttableComponent},
  {path:"categorytable",component:CategorytableComponent},
  {path:"carttable",component:CarttableComponent},
  {path:"cruduser",component:CruduserComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"producttable/:pId",component:UpdateproductComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"categorytable/:pcId",component:UpdatecategoryComponent },
  {path:"cruduser/:uId",component:UpdateuserComponent },
   {path:"addtocart",component:AddtocartComponent},
   {path:"productlist",component:ProductlistComponent },
   {path:"payment",component:PaymentComponent},
   {path:"paymentdetails",component:PaymentdetailsComponent},
   {path:"wishlist",component:WishlistComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminpageComponent,
    UserpageComponent,
    ProducttableComponent,
    CategorytableComponent,
    CarttableComponent,
   
    CruduserComponent,
        AddproductComponent,
        UpdateproductComponent,
        AddcategoryComponent,
        UpdatecategoryComponent,
        UpdateuserComponent,
        ProductlistComponent,
        AddtocartComponent,
        SearchPipe,
        PaymentComponent,
        PaymentdetailsComponent,
        WishlistComponent
        // AddcartComponent,
        // UpdatecartComponent
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
    // AngularFontAwesomeModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '753125513849-6t6eon0m05atoos2blvk61555tdqii8b.apps.googleusercontent.com'
            )
          },
          
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
