import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public createForm: FormGroup;
    nama: any;
    
  constructor(public firestore: AngularFirestore, 
    public afAuth: AngularFireAuth, public formBuilder: FormBuilder, public router: Router, public loadingCtrl: LoadingController,
                public alertCtrl: AlertController, private ServAuth: AuthService) {
                  this.createForm = formBuilder.group({
                    email: ['', Validators.required],
                    pw: ['', Validators.required]
                  });
                 }

  ngOnInit() {
  }
     async signIn(){
      const loading = await this.loadingCtrl.create();
      const email = this.createForm.value.email;
      const pw = this.createForm.value.pw;
      this.ServAuth.login(email, pw).then(async data =>{
        if(data){
          this.alertCtrl.create({
  
            message: data,
            buttons: ['OK']
            
          }).then(alertEl => {
            alertEl.present();
          });
        }else{
          
          this.afAuth.onAuthStateChanged( async user =>{
            if(user){
              
              this.ServAuth.getAdminDetail(user.email).subscribe(data => {
                this.nama = data.isAdmin;
                 if(this.nama){
                  loading.dismiss().then(() => {
                    this.router.navigateByUrl('/admin-dashboard');
                  });
                   
                 }else{
                    console.log("connexion see");
                     loading.dismiss().then(() => {
                      this.router.navigateByUrl('/tabs/tab1');
                    });
                    
                 }
                
                console.log("connexion see",this.nama);
            });
           
            }
          });
          return await loading.present();
        }
         
      });
     
     }
 


}
