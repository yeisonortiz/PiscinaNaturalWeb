import { AuthService} from './../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) {

  }


  form = new FormGroup({
    cellphone: new FormControl('',Validators.required),
    lastname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    username: new FormControl('',Validators.required),
    userpassword: new FormControl ('', Validators.required)

  })

  ngOnInit(): void {
  }

  async onRegister(){

    const {username, userpassword} = this.form.value;

    try{

    const user = await this.authSvc.register(username, userpassword);

    if(user)
    {
        this.router.navigate(['/verificacion-email']);

    }

    }
    catch(error){
      console.log(error)
    }

  }


}
