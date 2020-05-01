import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [AuthService]

})


export class LoginComponent  {
public  alert=false;

  constructor( private authSvc: AuthService, private router:Router ) { }


  form = new FormGroup({
    username: new FormControl('',Validators.required && Validators.email),
    userpassword: new FormControl ('', Validators.required)

  })


 async onLogin(){

    const {username, userpassword} = this.form.value;

    try
    {
      
    const user =  await this.authSvc.login(username, userpassword);
    
        if(user && user.user.emailVerified)
        {
          console.log(user)
            this.router.navigate(['/home']);
        }else if(user){
          this.router.navigate(['/verificacion-email'])
        }
        else{
          this.alert=true;
        }


    }
    catch(error)
    {
      console.log(error)
    }

  }

}
