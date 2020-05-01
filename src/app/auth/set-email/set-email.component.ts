import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-email',
  templateUrl: './set-email.component.html',
  styleUrls: ['./set-email.component.styl'],
  providers:[AuthService],
})
export class SetEmailComponent  {
public user$: Observable<any> = this.authSvc.afAuth.user ; 
  
  constructor(private authSvc:AuthService) { }


  onSendEmail(){

    this.authSvc.sendVerificationEmail();
  }

}
