import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  hide: boolean = false;
  listUser: any;
  DetailUser: any;
  isAdmin:boolean = false;
  public createForm: FormGroup;
  constructor( formBuilder:FormBuilder, public router: Router,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, private ServAuth: AuthService) {
                  this.createForm = formBuilder.group({
                    email: ['', Validators.required],
                    role: ['', Validators.required]
                  });
                 }


  ngOnInit() {
    this.listUser = this.ServAuth.getAdminList();

}

DetailUsers(id: string){
  this.ServAuth.getAdminDetail(id).subscribe(user => {
    this.DetailUser = user;
  });
}

DeleteUser(id: string){

  this.alertCtrl.create({
    header: 'Confirmer ?',
    message: 'Voulez-vous vraiment supprimer ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel'
      },
      {
        text: 'Supprimer',
        handler: () => {
          
          this.ServAuth.deleteAdmin(id).then(() => {
            this.alertCtrl.create({
  
              message: 'Bien supprimer',
              buttons: ['OK']
              
            }).then(alertEl => {
              alertEl.present();
            });
                 });
        }
      }
    ]
  }).then(alertEl => {
    alertEl.present();
  });
}
  addTodo(id:string){
    this.alertCtrl.create({
      header: 'Confirmer ?',
      message: 'Voulez-vous vraiment modifier le role',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('merci');
            const email = this.createForm.value.email;
              const rol = this.createForm.value.role;
            if(rol === 'adminer'){
             this.isAdmin= true;
             this.ServAuth.updateAdmin(id, email,  this.isAdmin).then(() => {
              this.alertCtrl.create({
  
                message: 'Bien enregistrer',
                
              }).then(alertEl => {
                alertEl.present();
              });
                        });
            }else{
              this.isAdmin= false;
              this.ServAuth.updateAdmin(id, email,  this.isAdmin).then(() => {
                this.alertCtrl.create({
  
                  message: 'Bien enregistrer',
                  
                }).then(alertEl => {
                  alertEl.present();
                });
                       
              });
            } 
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
  

  adminList(){
    this.hide = !this.hide;
   
  }
}
