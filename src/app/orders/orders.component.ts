import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.styl'],
  providers: [AuthService]

})
export class OrdersComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  

  constructor(private authSvc: AuthService, public afAuth: AngularFireAuth) { 
    
  }

  ngOnInit() {
   
  }

  


  
}
 