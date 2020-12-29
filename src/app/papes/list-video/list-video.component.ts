import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { Tab1Service } from 'src/app/tab1/shared/tab1.service';
import { Video } from 'src/app/tab1/tab1.model';
import { ChanneIDService } from 'src/app/tab3/channe-id.service';
import { channelData } from 'src/app/tab3/model.interface';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss'],
})
export class ListVideoComponent implements OnInit {
  ListeChannel: Observable<channelData[]>;
  hide: boolean = false;
  namer: string ='';
  nama: any;
  videos: Observable<Video[]>;
  channel = 'UCiS5eg5cE628AtLytcZ4WDg';
  
  constructor(private firestoreService:ChanneIDService,
            private youTubeService: Tab1Service,
            public navCtrl: NavController,
            private alertCtrl: AlertController,
            public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.firestoreService.getDefaultChannel().subscribe(data =>{
       this.nama = data;
       this.nama.map(user => {
         this.namer = user.IdChannel;
       })
       this.getYoutube(this.namer);
      console.log(this.namer);
    });
    this.ListeChannel = this.firestoreService.getChannelList();
  }
  show(eveat){
      if(!eveat){
        

      }else{
        this.getYoutube(eveat);
        console.log("is click",eveat);
      }
  }
  getYoutube(channelId){
    this.youTubeService.getPlaylistsForChannel(channelId)
    .subscribe((items: any) => {
     this.videos = items.map(item => {
       return {
         title: item.snippet.title,
         videoId: item.id.videoId,
         videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
         channelId: item.snippet.channelId,
         channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
         channelTitle: item.snippet.channelTitle,
         description: item.snippet.description,
         publishedAt: new Date(item.snippet.publishedAt),
         thumbnail: item.snippet.thumbnails.high.url
       };
     });
       // tslint:disable-next-line: align
       console.log('playlists: ', this.videos , items);
     }, async err => {
       let alert = this.alertCtrl.create({
         message: 'problem de connexion internet',
         buttons: ['OK']
       });
       (await alert).present();
     })
  }
}
