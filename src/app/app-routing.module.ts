import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetEmailComponent} from "./auth/set-email/set-email.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import {AboutComponent } from "./about/about.component"; 
import { RegisterComponent } from "./auth/register/register.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderComponent } from "./orders/order/order.component";


const routes: Routes = [
{path:'order', component: OrderComponent}, 
{path:'orders', component: OrdersComponent }, 
{path:"verificacion-email", component: SetEmailComponent},
{path:'about', component: AboutComponent },
{path:'home', component: HomeComponent},
{path:'login', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
