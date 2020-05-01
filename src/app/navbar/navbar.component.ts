import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl'],
  providers: [AuthService]
})

export class NavbarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;


  title="Piscina Natural Piedemonte Llanero"

  constructor(private authSvc: AuthService, private router:Router) { }
  


async onLogout(){

  try
  {

  await  this.authSvc.logout();
    this.router.navigate(['/home']);

  }
  catch(error)
  {
    console.log(error)
  }



}



}
