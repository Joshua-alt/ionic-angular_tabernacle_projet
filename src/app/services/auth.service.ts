import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   authStat: any = null;
   isAdmin: boolean= false;
   errorMessage: string ='';
  constructor(public firestore: AngularFirestore, 
    public afAuth: AngularFireAuth) { }

  async createAccount(email, password){
    const user = await this.afAuth.createUserWithEmailAndPassword(
     email,
     password,
    
    ).then(data =>{
      console.log(data);

     
          this.createRole( email, this.isAdmin );
      
  
    });
   
    
    console.log(user);
  }

  async login(email, password){
    
   
    try{
      const user = await this.afAuth.signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(user);
    }catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          this.errorMessage = "Votre addresse email est invalide.";
          break;
        case "auth/wrong-password":
          this.errorMessage = "Votre mot de passe est incorrecte.";
          break;
        case "auth/user-not-found":
          this.errorMessage = "Utilisateur avec cette addresse email n'exist pas.";
          break;
        case "auth/user-disabled":
          this.errorMessage = "Utilisateur n'est pas activé.";
          break;
        case "auth/too-many-requests":
          this.errorMessage = "Too many requests. Try again later.";
          break;
        case "auth/operation-not-allowed":
          this.errorMessage = "La connexion avec email et mot de passe n'est pas permit.";
          break;
        default:
          this.errorMessage = "An undefined Error happened, check your network.";
      }
     
      console.log(error.code)
    }
  
    if (this.errorMessage != null) {
      return this.errorMessage;
    }
  
    
  }

 
  async resent(email:string){
    const user = await this.afAuth.sendPasswordResetEmail(email);
    console.log(user);
  }
  async logout(){
    const user = await this.afAuth.signOut();
    console.log(user);
  }
  createRole(
    email: string,
    isAdmin
 
  ): Promise<void> {
  
  
    return this.firestore.doc(`AdminLIST/${email}`).set({
      email,
      isAdmin,
    });
  }

  getAdminList(): Observable<any[]> {
    return this.firestore.collection<any>(`AdminLIST`).valueChanges();
  }
  getAdminDetail(AdminId: string): Observable<any> {
    return this.firestore.collection('AdminLIST').doc<any>(AdminId).valueChanges();
  }
  deleteAdmin(AdminId: string){
    return this.firestore.collection('AdminLIST').doc(AdminId).delete();
  }

  updateAdmin(
    AdminId: string,
    Email: string,
    isAdmin
 ) {
    
    return this.firestore.collection('AdminLIST').doc(AdminId).update({email:Email,isAdmin: isAdmin  });
   }

  //get the  statauth 
  async stat(){
    this.afAuth.onAuthStateChanged( user =>{
      if(user){
        this.firestore
        .doc(`/AdminLIST/${user.email}`)
        .get();
      }
    });
  }
  
}
