import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cart',
    component:CartListComponent
  },
  {
    path:'viewProduct',
    component:ViewProductComponent
  }
];
