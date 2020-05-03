import { Injectable } from '@angular/core';
import {auth} from 'firebase/app'
import { AngularFireAuth} from '@angular/fire/auth'
import { User} from 'firebase'
import { first} from 'rxjs/operators';
import { promise } from 'protractor';
import  { AngularFirestore } from '@angular/fire/firestore'

@Injectable()


export class AuthService {

  public user : User;
  public firestore : AngularFirestore;


  constructor( public afAuth: AngularFireAuth ) { }


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

  async register(email:string, password:string  )
  { 
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.sendVerificationEmail();


    return result;
    }
    catch(error){
      console.log(error)
    }

  }

  async dates (name: string, lastname:string, cellphone:string ){

    try{

    // const result = await this.firestore.collection('Usuarios').doc(name).get({name,lastname,cellphone});

    }
    catch(error){
      console.log(error)
    }

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

    return this.afAuth.authState.pipe(first()).toPromise();
 
  }
  


}
