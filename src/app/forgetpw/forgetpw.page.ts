import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.page.html',
  styleUrls: ['./forgetpw.page.scss'],
})
export class ForgetpwPage implements OnInit {
 
  public createResentForm: FormGroup;
  constructor(public loadingCtrl: LoadingController,public alertCtrl: AlertController,private formBuilder: FormBuilder, private ServAuth: AuthService) { 
     this.createResentForm = formBuilder.group({
      email: ['', Validators.required],
    });}

  ngOnInit() {
  }
   async resentpw(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const email = this.createResentForm.value.email;
    this.ServAuth.resent(email).then(() =>{
      loading.dismiss();
      this.alertCtrl.create({
  
        message: 'Verifier votre compte email',
        buttons: ['OK']
        
      }).then(alertEl => {
        alertEl.present();
      });
    },async err => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        message: 'problem de connexion internet',
        buttons: ['OK']
      });
      (await alert).present();
    });
   }
}
