import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { first} from 'rxjs/operators';
import  { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from "@angular/common";

@Injectable()


export class AuthService {

  constructor( public afAuth: AngularFireAuth, private firestore: AngularFirestore, private datepipe: DatePipe   ) { }


  async sendVerificationEmail(): Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password:string){

    try{

      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
         
    return result;

    }
    catch(error){;
    console.log(error)
    }
    
  }



  async register(email:string, password:string, name:string , lastname:string ,cellphone:string  )
  { 
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

      
    this.dates(name,lastname,cellphone,result.user.uid);
    this.sendVerificationEmail();


    return result;
    }
    catch(error){
      console.log(error)
    }

  }


  idDocument(name:string, lastname:string){

    var date = Date();
    const id = "Cli-";
    const n= name.charAt(0).toUpperCase();
    const ln= lastname.charAt(0).toUpperCase();
    var Dat = this.datepipe.transform(date,'yyyy.MM.dd');
    const idE =id + n + ln +"-" + Dat
 
    return idE

  }

   dates(nombre:string, apellido:string, ncelular:string, uid:string ) {
    
   const id = this.idDocument(nombre,apellido);

  
    
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("Usuarios")
            .doc(id)
            .set({
              nombre,
              apellido,
              ncelular, 
              uid          
            });
    });
}


  async logout(){

    try{

      await this.afAuth.signOut();

    }
    catch(error){
      console.log(error);
    }
  
  }



  getCurrenUser(){

    return this.afAuth.authState;
 
  }
  


}
