import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './Component/cart/cart.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductComponent } from './Component/product/product.component';
import { RegisterComponent } from './Component/register/register.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckOutComponent } from './Component/Order/check-out/check-out.component';
import { AllordersComponent } from './Component/Order/allorders/allorders.component';
import { CategoryDetailsComponent } from './Component/category-details/category-details.component';
import { FavoriteComponent } from './Component/favorite/favorite.component';
import { LoaderComponent } from './Component/loader/loader.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    ProfileComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    CheckOutComponent,
    AllordersComponent,
    CategoryDetailsComponent,
    FavoriteComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
