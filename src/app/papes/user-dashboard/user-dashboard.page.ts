import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  public createForm: FormGroup;
    nama: any;
  constructor(public firestore: AngularFirestore, 
    public afAuth: AngularFireAuth, public formBuilder: FormBuilder, public router: Router, public loadingCtrl: LoadingController,
                public alertCtrl: AlertController, private ServAuth: AuthService) {
                  this.createForm = formBuilder.group({
                    email: ['', Validators.required],
                    pw: ['', Validators.required],
                    Confirmpw:['', Validators.required]
                  });
                 }

  ngOnInit() {
  }


   async register(){
    const loading = await this.loadingCtrl.create();
    const email = this.createForm.value.email;
    const pw = this.createForm.value.pw;
    const Confirme= this.createForm.value.Confirmpw;
    if(Confirme===pw){
      
      this.ServAuth.createAccount(email, pw)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.alertCtrl.create({
  
              message: 'Bien enregistrer',
              buttons: ['OK']
              
            }).then(alertEl => {
              alertEl.present();
            });
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
          });
        }
      );
    return await loading.present();
    }else{
      this.alertCtrl.create({
  
        message: 'S\'il vous plait, les 2 mot de passe ne se correspondent pas',
        buttons: ['OK']
        
      }).then(alertEl => {
        alertEl.present();
      });
    }

    
  }
 
}
