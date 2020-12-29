import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.page.html',
  styleUrls: ['./forgetpw.page.scss'],
})
export class ForgetpwPage implements OnInit {
 
  public createResentForm: FormGroup;
  constructor(public alertCtrl: AlertController,private formBuilder: FormBuilder, private ServAuth: AuthService) { 
     this.createResentForm = formBuilder.group({
      email: ['', Validators.required],
    });}

  ngOnInit() {
  }
   resentpw(){
    const email = this.createResentForm.value.email;
    this.ServAuth.resent(email).then(() =>{
      this.alertCtrl.create({
  
        message: 'Verifier votre compte email',
        buttons: ['OK']
        
      }).then(alertEl => {
        alertEl.present();
      });
    });
   }
}
