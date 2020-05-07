import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SetEmailComponent } from './auth/set-email/set-email.component';
import { DatePipe } from "@angular/common";


/*firebase*/

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './auth/register/register.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SetEmailComponent,
    RegisterComponent,
    OrdersComponent
      ],
  
  imports: [
   BrowserModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule, 
   AngularFireAuthModule, 
   AngularFireStorageModule, 
   AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   NgbModule
  ],
  providers: [
    AppComponent,
    DatePipe

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
