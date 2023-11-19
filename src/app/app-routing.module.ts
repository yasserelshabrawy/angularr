import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { CartComponent } from './Component/cart/cart.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { guardsGuard } from './guards.guard';
import { CheckOutComponent } from './Component/Order/check-out/check-out.component';
import { AllordersComponent } from './Component/Order/allorders/allorders.component';
import { CategoryDetailsComponent } from './Component/category-details/category-details.component';
import { FavoriteComponent } from './Component/favorite/favorite.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', title: 'home' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'products', component: ProductComponent, title: 'products' },
  {
    path: 'productDetails/:productId',
    component: ProductDetailsComponent,
    title: 'product Details',
  },
  { path: 'categories', component: CategoriesComponent, title: 'categories' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'favorite', component: FavoriteComponent, title: 'favorite' },
  { path: 'register', component: RegisterComponent, title: 'register' },
  { path: 'checkOut/:cartId', component: CheckOutComponent, title: 'checkout' },
  {
    path: 'categories/categoryDetails/:id',
    component: CategoryDetailsComponent,
    title: 'category',
  },
  { path: 'allorders', component: AllordersComponent, title: 'my orders' },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [guardsGuard],
    title: 'cart',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
