import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChanneIDService } from './channe-id.service';
import { channelData  } from './model.interface';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public createChannelForm: FormGroup;
  public ListeChannel: Observable<channelData[]>;
  public channel: channelData;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService:ChanneIDService ,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createChannelForm = formBuilder.group({
      ChannelName: ['', Validators.required],
      idchannel: ['', Validators.required],
      ChannelDescription: ['', Validators.required],
    });
  }
  
    ngOnInit() {
    
        this.ListeChannel = this.firestoreService.getChannelList();
    
    }

    DetailChannel(idchannel: string){
      this.firestoreService.getChannelDetail(idchannel).subscribe(channel => {
        this.channel = channel;
      });
    }
    
    DeleteChannel(idchannel: string){

      this.alertCtrl.create({
        header: 'confirmer ?',
        message: 'Voulez-vous vraiment supprimer?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel'
          },
          {
            text: 'Supprimer',
            handler: () => {
    
              //AIzaSyBXI0QzbC6cj_m6G8JPUNa0-8bDblM24cM
              this.firestoreService.deleteChannel(idchannel).then(() => {
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
    async createChannel() {
    const loading = await this.loadingCtrl.create();
  
    const ChannelName = this.createChannelForm.value.ChannelName;
    const IDChannel = this.createChannelForm.value.idchannel;
    const ChannelDescription = this.createChannelForm.value.ChannelDescription;

  
    this.firestoreService.createChannel(ChannelName, IDChannel, ChannelDescription)
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
  }
  

}
